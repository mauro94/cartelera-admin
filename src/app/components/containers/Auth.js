import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Format, Session, Status } from 'Global/'
import { thunks } from 'Logic/actions/thunks'

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                component: <p>Loading...</p>
            }
        }
        componentWillMount() {
            if (Format.empty(this.props.user) || Format.empty(this.props.user.email)) {
                if (!Session.exists())
                    history.replace('/login')
                else {
                    //TODO: ask server if token is valid
                    //if not, rmToken and redirect to login
                    this.props.getUser(Session.userId())
                    if (Session.isNewbie() && this.props.location.pathname != "/login/newbie") {
                        history.replace('/login/newbie')
                    }
                }
            }
            else if (Session.exists() && !this.props.loading) {
                this.setState({
                    component: <Component {...this.props} />
                })
            }
        }
        componentWillReceiveProps(nextProps) {
            if (this.props.loading && nextProps.ready && !Format.empty(nextProps.user)) {
                this.setState({
                    component: <Component {...nextProps} />
                })
            }
        }
        render() {
            return this.state.component
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.user.current,
            loading: state.user.status == Status.WaitingOnServer,
            ready: state.user.status == Status.Ready
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            getUser: (id) => dispatch(thunks.user.get(id))
        }
    }
    return withRouter(connect(
        mapStateToProps,
        mapDispatchToProps)
        (AuthenticatedComponent))
}