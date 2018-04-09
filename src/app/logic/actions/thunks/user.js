import { history, Format, Session, Status, CurrentUserActions, UserActions, SessionActions } from 'Helpers/index'
import { createAction } from 'Logic/actions'
import { serverCall, request, headers } from 'Logic/actions/thunks/helper'

export const login = (loginAttempt) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: SessionActions.Login,
        call: () => request.post(
            '/auth_user',
            loginAttempt,
            { headers: headers.withoutAuth() }),
        onSuccess: (response) => {
            Session.create(
                response.data.authToken,
                response.data.id,
                response.data.isNewbie
            )
            history.replace(response.data.isNewbie ? '/login/newbie' : '/')
        }
    })
}

export const get = (id, isCurrent = false) => {
    let actionType = isCurrent ? CurrentUserActions.Get : UserActions.Get
    return (dispatch) => {
        serverCall({
            dispatch: dispatch,
            actionType: actionType,
            call: () => request.get(
                `/users/${id}`,
                { headers: headers.withAuth() })
        })
    }
}

export const logout = () => {
    //TODO: server call for logging out
    return (dispatch) => {
        Session.destroy()
        dispatch(
            createAction(SessionActions.Logout, null, null,
                Status.Ready))
        history.replace('/login')
    }
}

export const update = (user, isCurrent = false) => {
    let formattedUser = Format.snakeCase('user', user)
    let actionType = isCurrent ? CurrentUserActions.Update : UserActions.Update
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: actionType,
        call: () => request.put(
            `/users/${user.id}`,
            formattedUser,
            { headers: headers.withAuth() }),
        onSuccess: (response) => Session.setNewbie(false)
    })
}

export const create = (email) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: UserActions.Create,
        call: () => request.post(
            '/sponsor/',
            { user: { email: email } },
            { headers: headers.withAuth() })
    })
}

export const all = () => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: UserActions.All,
        call: () => request.get(
            '/users',
            { headers: headers.withAuth() })
    })
}