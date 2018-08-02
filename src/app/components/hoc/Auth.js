import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Entity, Session, history, CurrentUserActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            if (Entity.isEmpty(this.props.currentUser.show)) {
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
        }
        render() {
            return <Component
                currentUser={this.props.currentUser.show}
                action={CurrentUserActions.Get}
                hide
                reducer={{
                    status: this.props.currentUser.status,
                    action: this.props.currentUser.action,
                    error: this.props.currentUser.error
                }}
            />
        }
    }
    const mapStateToProps = (state) => {
        return {
            currentUser: state.currentUser
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