import {
    SessionActions,
    Status
} from 'Config/constants'
import { history } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { post } from 'Logic/actions/thunks'
// import { SubmissionError } from 'redux-form/lib/SubmissionError'

export const login = (loginAttempt) => {
    return (dispatch) => {
        dispatch(createAction(SessionActions.Login, null,
            null, Status.WaitingOnServer))
        post(loginAttempt, 'api/login')
            .then(response => {
                dispatch(
                    createAction(SessionActions.Login, response.user, null,
                        Status.Ready))
                history.push(response.isNewbie ? '/newbie' : '/')
            })
            .catch((error) => {
                dispatch(
                    createAction(SessionActions.Login, null, error.response.data,
                        Status.Failed))
            })
    }
}