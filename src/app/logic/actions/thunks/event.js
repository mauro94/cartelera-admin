import {
    EventActions,
    Status
} from 'Config/constants'
import { history, request, getToken } from 'Config/helper'
import { createAction } from 'Logic/actions'

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(EventActions.UserEvents, null,
            null, Status.WaitingOnServer))
        request.get('/event_list', {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
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

export const unpublish = (id) => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Update, null,
            null, Status.WaitingOnServer))
        request.put('/events/' + id , {event: {cancel_mesage: "Cancelled because of rain", id: id}}, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(
                    createAction(EventActions.Update, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Update, null, error.response.data,
                        Status.Failed))
            })
    }
}


export const publish = (id) => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Update, null,
            null, Status.WaitingOnServer))
        request.put('/events/' + id , {event: {published: true, id: id}}, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(
                    createAction(EventActions.Update, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Update, null, error.response.data,
                        Status.Failed))
            })
    }
}

export const cancel = (id) => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Update, null,
            null, Status.WaitingOnServer))
        request.put('/events/' + id , {event: {cancelled: true, id: id}}, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(
                    createAction(EventActions.Update, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Update, null, error.response.data,
                        Status.Failed))
            })
    }
}