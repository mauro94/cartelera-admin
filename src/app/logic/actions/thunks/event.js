import {
    EventActions,
    Status
} from 'Config/constants'
import { history, request } from 'Config/helper'
import { createAction } from 'Logic/actions'

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(EventActions.UserEvents, null,
            null, Status.WaitingOnServer))
        request.get('/events')
            .then(response => {
                dispatch(
                    createAction(EventActions.UserEvents, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.UserEvents, null, error.response.data,
                        Status.Failed))
            })
    }
}