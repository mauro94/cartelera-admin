import React from 'react'
import { ErrorElement, LoadingElement } from 'Presentational/elements'
import { actionSucceded, actionFailed, waitingOnAction } from 'Containers/helper'
import { Entity, Status } from 'Helpers/index'

const load = (loadingResource, Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.shouldBeEmpty = false
            this.waiting = Entity.isEmpty(props[loadingResource]) ||
                waitingOnAction({
                    wasWaiting: false,
                    reducer: props.reducer,
                    action: props.action
                })
            this.state = {
                status: this.waiting ? Status.WaitingOnServer : Status.Ready
            }
        }
        componentWillReceiveProps(nextProps) {
            if (this.props.loadingResource == 'categories') {
                console.log()
            }
            let status = {
                wasWaiting: this.waiting,
                reducer: nextProps.reducer,
                action: this.props.action
            }
            if (actionSucceded(status)) {
                this.shouldBeEmpty = Entity.isEmpty(nextProps[loadingResource])
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
            else if (waitingOnAction(status) || (!this.shouldBeEmpty && Entity.isEmpty(nextProps[loadingResource]))) {
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
                case Status.Failed:
                    if (this.props.hide) return <ErrorElement
                        message={this.props.reducer.error} />
                case Status.WaitingOnServer:
                    if (this.props.hide) return <LoadingElement />
                    else return (
                        <React.Fragment>
                            <LoadingElement />
                            <Component
                                {...this.getProps()} />
                        </React.Fragment>
                    )
                case Status.Ready:
                default:
                    return <Component
                        {...this.getProps()} />
            }
        }
    }
}

export default load