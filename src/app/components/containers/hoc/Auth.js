import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Spinner from 'react-spinkit'

import { actionSucceded } from 'Containers/helper'
import { Entity, Session, Status, history, UserActions, CurrentUserActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props)
            this.missingUser = Entity.isEmpty(props.user) || Entity.isEmpty(props.user.email)
            this.state = {
                component: this.missingUser ?
                    <Spinner name="pulse" /> : <Component {...this.props} />
            }
        }
        componentWillMount() {
            if (this.missingUser) {
                if (!Session.exists())
                    history.replace('/login')
                else {
                    //TODO: ask server if token is valid
                    //if not, rmToken and redirect to login
                    this.props.getUser(Session.getUserId())
                    if (Session.isNewbie() && this.props.location.pathname != "/login/newbie") {
                        history.replace('/login/newbie')
                    }
                }
            }
            else if (Session.exists() && !this.props.loading) {
                this.setState({
                    component: <Component {...this.props} />
                })
                this.missingUser = false
            }
        }
        componentWillReceiveProps(nextProps) {
            if (actionSucceded(this.missingUser, nextProps, CurrentUserActions.Get)) {
                this.setState({
                    component: <Component {...nextProps} />
                })
                this.missingUser = false
            }
        }
        render() {
            return this.state.component
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.currentUser.show,
            loading: state.currentUser.status == Status.WaitingOnServer,
            ready: state.currentUser.status == Status.Ready,
            action: state.currentUser.action,
            status: state.currentUser.status
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            getUser: (id) => dispatch(thunks.user.get(id, true))
        }
    }
    return withRouter(connect(
        mapStateToProps,
        mapDispatchToProps)
        (AuthenticatedComponent))
}