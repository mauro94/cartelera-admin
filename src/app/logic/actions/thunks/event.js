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


export const get = (id) => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Current, null,
            null, Status.WaitingOnServer))
        request.get('/events/' + id)
            .then(response => {
                dispatch(
                    createAction(EventActions.Current, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Current, null, error.response.data,
                        Status.Failed))
            })
    }
}