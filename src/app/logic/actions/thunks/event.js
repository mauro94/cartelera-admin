import { EventActions } from 'Helpers/constants'
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
    let {id, ...updatedFields} = event;
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: EventActions.Update,
        call: () => request.put(
            `/events/${id}/`,
            { event: updatedFields },
            { headers: headers.withAuth() }) 
    })
}