import React from 'react'
import { ErrorElement, LoadingElement } from 'Presentational/elements'
import { actionSucceded, actionFailed, waitingOnAction } from 'Containers/helper'
import { Entity, Status } from 'Helpers/index'

const withFeedback = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.waiting = false
            this.state = {
                status: Status.Ready
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
                if (this.props.onSuccess) {
                    this.props.onSuccess()
                }
            }
            else if (actionFailed(status)) {
                this.waiting = false
                this.setState({
                    status: Status.Failed
                })
                if (this.props.onError) {
                    this.props.onError()
                }
            }
            else if (waitingOnAction(status)) {
                this.waiting = true
                this.setState({
                    status: Status.WaitingOnServer
                })
            }
        }
        getProps() {
            let { reducer, action, onSuccess, onError, ...childProps } = this.props;
            return childProps
        }
        render() {
            switch (this.state.status) {
                case Status.WaitingOnServer:
                case Status.Ready:
                case Status.Failed:
                    return <Component
                        {...this.getProps()} />
            }
        }
    }
}

export default withFeedback