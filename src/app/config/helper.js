import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import decode from 'jwt-decode'
import { thunks } from 'Logic/actions/thunks'
import { UserActions, Status } from 'Config/constants'
import { update } from 'Logic/actions/thunks/user';

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null
}

export const request = axios.create({
    baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
    timeout: 1000
})

export const history = createBrowserHistory()

export const loggedIn = () => {
    return !isEmpty(localStorage.getItem('SESSION_TOKEN'))
}

export const getUserId = () => {
    return decode(localStorage.getItem('SESSION_TOKEN')).id
}

export const setToken = (token) => {
    localStorage.setItem('SESSION_TOKEN', token)
}

export const rmToken = () => {
    localStorage.removeItem('SESSION_TOKEN')
}

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            if (isEmpty(this.props.user) && !loggedIn()) {
                history.replace('/login')
            }
            else if (loggedIn) {
                //TODO: ask server if token is valid
                //if not, rmToken and redirect to login
                this.props.currentUser()
            }
        }
        render() {
            if (this.props.loading)
                return <p>Loading...</p>
            return (
                <Component {...this.props} />
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.user.current,
            loading: state.user.status == Status.WaitingOnServer
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            currentUser: () => dispatch(thunks.user.current())
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
}

export const makeOption = function (element) {
    return <option key={element.key} value={element.key}> {element.text} </option>
}
