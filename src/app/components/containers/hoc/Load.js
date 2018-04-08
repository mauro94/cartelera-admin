import React from 'react'
import { ErrorElement, LoadingElement } from 'Presentational/elements'
import { actionSucceded, actionFailed, waitingOnAction } from 'Containers/helper'
import { Entity, Status } from 'Helpers/index'

const load = (loadingResource, Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.waiting = Entity.isEmpty(props[loadingResource])
            this.state = {
                status: this.waiting ? Status.WaitingOnServer : Status.Ready
            }
        }
        componentWillReceiveProps(nextProps) {
            if (actionSucceded(this.waiting, nextProps.reducer, this.props.action)) {
                this.waiting = false
                this.setState({
                    status: Status.Ready,
                })
            }
            else if (actionFailed(this.waiting, nextProps.reducer, this.props.action)) {
                this.waiting = false
                this.setState({
                    status: Status.Failed
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