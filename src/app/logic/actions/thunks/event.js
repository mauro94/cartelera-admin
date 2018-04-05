import { EventActions } from 'Global/constants'
import { api, request, authotizedRequest } from 'Logic/actions'

export const all = () => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: EventActions.All,
        request: () => authorizedRequest.get('/event_list'),
    })
}

export const get = (id) => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: EventActions.All,
        request: () => request.get(`/events/${id}`),
    })
}

export const update = (event) => {
    return dispatch => api({
        dispatch: dispatch,
        actionType: EventActions.All,
        request: () => authorizedRequest.put(`/events/${event.id}/`, { event })
    })
}