import React from 'react'
import { ErrorElement, LoadingElement } from 'Presentational/elements'
import { actionSucceded, actionFailed, waitingOnAction } from 'Containers/helper'
import { Entity, Status } from 'Helpers/index'

const load = (loadingResource, Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.waiting = Entity.isEmpty(props[loadingResource]) ||
                waitingOnAction(false, props.reducer, props.action)
            this.state = {
                status: this.waiting ? Status.WaitingOnServer : Status.Ready
            }
        }
        componentWillReceiveProps(nextProps) {
            let status = {
                wasWaiting: this.waiting,
                reducer: nextProps.reducer,
                action: this.props.action
            }
            if (actionSucceded(status)) {
                this.waiting = false
                this.setState({
                    status: Status.Ready,
                })
            }
            else if (actionFailed(status)) {
                this.waiting = false
                this.setState({
                    status: Status.Failed
                })
            }
            else if (waitingOnAction(status)) {
                this.waiting = true
                this.setState({
                    status: Status.WaitingOnServer
                })
            }
        }
        getProps() {
            let { reducer, action, ...childProps } = this.props;
            return childProps
        }
        render() {
            switch (this.state.status) {
                case Status.Ready:
                    return <Component
                        {...this.getProps()} />
                case Status.Failed:
                    return <ErrorElement
                        message={nextProps.reducer.error} />
                case Status.WaitingOnServer:
                    return <LoadingElement />
            }
        }
    }
}

export default load