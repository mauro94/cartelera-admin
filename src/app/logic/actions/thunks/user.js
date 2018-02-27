import {
    UserActions,
    Status
} from 'Config/constants'
import { history } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { request, setToken, getUserId, rmToken } from 'Config/helper'

export const login = (loginAttempt) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Login, null,
            null, Status.WaitingOnServer))
        request.post('/login', loginAttempt)
            .then(response => {
                setToken(response.data.token)
                profile((response) => createAction(UserActions.Login, response.data, null, Status.Ready), dispatch)
                    .then(response => {
                        history.push(response.data.isNewbie ? '/newbie' : '/')
                    })
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Login, null, error.response.data,
                        Status.Failed))
            })
    }
}

const profile = (action, dispatch) => {
    return request.get('/users/' + getUserId())
        .then(response => {
            dispatch(action(response))
            return response
        })
}

export const current = () => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Current, null,
            null, Status.WaitingOnServer))
        profile((response) => createAction(UserActions.Current, response.data, null, Status.Ready), dispatch)
            .catch((error) => {
                rmToken()
                dispatch(
                    createAction(UserActions.Current, null, error.response.data,
                        Status.Failed))
                history.replace('/login')
            })
    }
}

export const logout = () => {
    //TODO: server call for logging out
    return (dispatch) => {
        rmToken()
        dispatch(
            createAction(UserActions.Logout, null, null,
                Status.Ready))
        history.replace('/login')
    }
}

export const update = (profileDetails) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Update, null,
            null, Status.WaitingOnServer))
        request.put('/users/' + profileDetails.id, profileDetails)
            .then(response => {
                dispatch(
                    createAction(UserActions.Update, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Update, null, error.response.data,
                        Status.Failed))
            })
    }
}