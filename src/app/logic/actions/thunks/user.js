import {
    UserActions,
    Status
} from 'Config/constants'
import { history } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { request } from 'Config/helper'

export const login = (loginAttempt) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Login, null,
            null, Status.WaitingOnServer))
        request.get('/users/1')
            .then(response => {
                dispatch(
                    createAction(UserActions.Login, response.data, null,
                        Status.Ready))
                history.push(response.data.isNewbie ? '/newbie' : '/')
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Login, null, error.response.data,
                        Status.Failed))
            })
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