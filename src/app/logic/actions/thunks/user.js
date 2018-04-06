import { history, Format, Session, Status, UserActions } from 'Helpers/index'
import { createAction } from 'Logic/actions'
import { api, normalRequest, authorizedRequest } from 'Logic/actions/thunks/helper'

export const login = (loginAttempt) => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: UserActions.Login,
        request: () => normalRequest.post('/auth_user', loginAttempt),
        onSuccess: (response) => {
            Session.set(
                response.data.authToken,
                response.data.id,
                response.data.isNewbie
            )
            history.push(response.data.isNewbie ? '/login/newbie' : '/dashboard')
        }
    })
}

export const get = (id) => {
    return (dispatch) => {
        api({
            dispatch: dispatch,
            actionType: UserActions.Get,
            request: () => authorizedRequest.get(`/users/${id}`)
        })
    }
}

export const logout = () => {
    //TODO: api call for logging out
    return (dispatch) => {
        Session.rm()
        dispatch(
            createAction(UserActions.Logout, null, null,
                Status.Ready))
        history.replace('/login')
    }
}

export const update = (profileDetails) => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: UserActions.Update,
        request: () => authorizedRequest.put(`/users/${profileDetails.id}`,
            Format.snakeCase('user', profileDetails)),
        onSuccess: (response) => Session.isNewbie(false)
    })
}

export const create = (email) => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: UserActions.Create,
        request: () => authorizedRequest.post('/sponsor/', { user: { email: email } })
    })
}

export const all = () => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: UserActions.All,
        request: () => authorizedRequest.get('/users')
    })
}