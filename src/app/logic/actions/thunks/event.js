import { Format, EventActions } from 'Helpers/index'
import { serverCall, request, headers } from './helper'

export const all = () => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: EventActions.All,
        call: () => request.get(
            '/event_list',
            { headers: headers.withAuth() }),
    })
}

export const get = (id) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: EventActions.Get,
        call: () => request.get(
            `/events/${id}`,
            { headers: headers.withoutAuth() }),
    })
}

export const update = (event) => {
    let { id, ...updatedFields } = event
    updatedFields = Format.snakeCase('event', updatedFields)
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: EventActions.Update,
        call: () => request.put(
            `/events/${id}/`,
            updatedFields,
            { headers: headers.withAuth() })
    })
}

export const create = (event) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: EventActions.Create,
        call: () => request.post(
            `/events/`,
            Format.snakeCase('event', event),
            { headers: headers.withAuth() })
    })
}