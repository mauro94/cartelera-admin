import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import decode from 'jwt-decode'
import { thunks } from 'Logic/actions/thunks'
import { UserActions, Status } from 'Config/constants'
import { update } from 'Logic/actions/thunks/user';

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null || object.length == 0
}

export const request = axios.create({
    //baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
    baseURL: 'https://cartelera-api.herokuapp.com/',
    headers: {
        'Accept': 'application/vnd.cartelera-api.v1',
    }
})


export const history = createBrowserHistory()

export const loggedIn = () => {
    return !isEmpty(localStorage.getItem('SESSION_TOKEN'))
}

export const setSession = (token, id, isNewbie) => {
    localStorage.setItem('SESSION_TOKEN', token)
    localStorage.setItem('SESSION_USER_ID', id)
    localStorage.setItem('SESSION_USER_IS_NEWBIE', isNewbie)
}

export const getToken = () => {
    return localStorage.getItem('SESSION_TOKEN')
}

export const getSessionUserId = () => {
    return localStorage.getItem('SESSION_USER_ID')
}

export const isCurrentUserNewbie = () => {
    return (localStorage.getItem('SESSION_USER_IS_NEWBIE') == 'true')
}

export const setCurrentUserNewbie = (isNewbie) => {
    localStorage.setItem('SESSION_USER_IS_NEWBIE', isNewbie)
}
export const rmSession = () => {
    localStorage.removeItem('SESSION_TOKEN')
    localStorage.removeItem('SESSION_USER_ID')
    localStorage.removeItem('SESSION_USER_IS_NEWBIE')
}

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                component: <p>Loading...</p>
            }
        }
        componentWillMount() {
            if (isEmpty(this.props.user) || isEmpty(this.props.user.email)) {
                if (!loggedIn())
                    history.replace('/login')
                else {
                    //TODO: ask server if token is valid
                    //if not, rmToken and redirect to login
                    this.props.getUser(getSessionUserId())
                    if (isCurrentUserNewbie() && this.props.location.pathname != "/login/newbie") {
                        history.replace('/login/newbie')
                    }
                }
            }
            else if (loggedIn() && !this.props.loading) {
                this.setState({
                    component: <Component {...this.props} />
                })
            }
        }
        componentWillReceiveProps(nextProps) {
            if (this.props.loading && nextProps.ready && !isEmpty(nextProps.user)) {
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
            //getUser: () => dispatch(thunks.user.logout())
        }
    }
    return withRouter(connect(
        mapStateToProps,
        mapDispatchToProps)
        (AuthenticatedComponent))
}

export const objectToSnakeCase = (objectName, object) => {
    var snakeCase = require('snake-case');
    var snakeObject = {}

    snakeObject[objectName] = {}

    for (var key in object) {
        snakeObject[objectName][snakeCase(key)] = object[key]
    }

    return snakeObject
}

const month = ["enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"]

export const formatDate = (eventDate) => {
    let d = new Date(eventDate)
    return d.getDate() + " de " + month[d.getMonth()]
}
