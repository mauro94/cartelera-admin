import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import decode from 'jwt-decode'
import { createAction } from 'Logic/actions'
import { UserActions, Status } from 'Config/constants'

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null
}

export const request = axios.create({
    baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
    timeout: 1000
})

export const history = createBrowserHistory()

const loggedIn = () => {
    return !isEmpty(localStorage.getItem('SESSION_TOKEN'))
}

export const getProfile = () => {
    return decode(localStorage.getItem('SESSION_TOKEN'))
}

export const setToken = (token) => {
    localStorage.setItem('SESSION_TOKEN', token)
}

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            if (isEmpty(this.props.user) && !loggedIn()) {
                history.replace('/login')
            }
            else if (loggedIn) {
                let currentUser = getProfile()
                this.props.updateUser(currentUser)
            }
        }
        render() {
            return (
                <Component {...this.props} />
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.user.current,
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            updateUser: (updatedUser) => dispatch(createAction(UserActions.Update, updatedUser, null, Status.Ready))
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
}
export const makeOption = function (element) {
    return <option key={element.key} value={element.key}> {element.text} </option>
}
