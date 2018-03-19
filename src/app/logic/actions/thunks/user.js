import {
    UserActions,
    Status
} from 'Config/constants'
import { createAction } from 'Logic/actions'
import { request, setSession, rmSession, history, getToken, setCurrentUserNewbie,  objectToSnakeCase} from 'Config/helper'

export const login = (loginAttempt) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Login, null,
            null, Status.WaitingOnServer))
        request.post('/auth_user', loginAttempt)
            .then(response => {
                setSession(response.data.authToken, response.data.id, response.data.isNewbie)
                dispatch(createAction(UserActions.Login, response.data, null, Status.Ready))
                history.push(response.data.isNewbie ? '/login/newbie' : '/dashboard')
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Login, null, error.response.data.error,
                        Status.Failed))
            })
    }
}

export const get = (id) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Get, null,
            null, Status.WaitingOnServer))
        request.get('/users/' + id, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(createAction(UserActions.Get, response.data, null, Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Get, null, error.response.data,
                        Status.Failed))
            })
    }
}

export const logout = () => {
    //TODO: server call for logging out
    return (dispatch) => {
        rmSession()
        dispatch(
            createAction(UserActions.Logout, null, null,
                Status.Ready))
        history.replace('/login')
    }
}

export const update = (profileDetails) => {
    let snakeProfileDetails = objectToSnakeCase("user", profileDetails)

    return (dispatch) => {
        dispatch(createAction(UserActions.Update, null,
            null, Status.WaitingOnServer))
        request.put('/users/' + profileDetails.id, snakeProfileDetails, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                let rookie = {
                    ...response.data,
                    isNewbie: false
                }
                setCurrentUserNewbie(false)
                dispatch(
                    createAction(UserActions.Update, rookie, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Update, profileDetails, error.response? error.response.data : error.message,
                        Status.Failed))
            })
    }
}
