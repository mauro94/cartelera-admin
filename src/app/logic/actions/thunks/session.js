import {
    SessionActions,
    Status
} from 'Config/constants'
import { history } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { post, get, del } from 'Logic/actions/thunks'

export function login(loginAttempt) {
    return (dispatch) => {
        dispatch(createAction(SessionActions.Login, null,
            null, Status.WaitingOnServer))
        post(loginAttempt, 'api/login')
            .then(response => {
                history.push(response.isNewbie ? '/newbie' : '/')
                dispatch(
                    createAction(SessionActions.Login, response.user, null,
                        Status.Ready))
            })
            .catch((error) => dispatch(
                createAction(SessionActions.Login, null, error,
                    Status.Failed)))
    }
}