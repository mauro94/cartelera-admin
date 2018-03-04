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
        componentWillMount() {
            if (isEmpty(this.props.user) && !loggedIn()) {
                history.replace('/login')
            }
            else if (loggedIn) {
                //TODO: ask server if token is valid
                //if not, rmToken and redirect to login
                if(isCurrentUserNewbie() && this.props.location.pathname != "/newbie"){
                    history.replace('/newbie')
                }
                this.props.getUser(getSessionUserId())
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
            getUser: (id) => dispatch(thunks.user.get(id))
            //getUser: () => dispatch(thunks.user.logout())
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
}
