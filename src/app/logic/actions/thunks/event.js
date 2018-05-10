import { Format, EventActions, EventsPerPage, Status } from 'Helpers/index'
import { serverCall, request, headers } from './helper'
import { createAction } from 'Logic/actions'

export const all = (filter, page) => {
    return dispatch => {
        dispatch(createAction(
            EventActions.CurrentPage,
            page,
            null,
            Status.Ready
        ))
        dispatch(createAction(
            EventActions.Filter,
            filter,
            null,
            Status.Ready
        ))
        return serverCall({
            dispatch: dispatch,
            actionType: EventActions.All,
            call: () => request.get(
                `/events/${filter}`,
                {
                    headers: headers.withAuth(),
                    params: {
                        page: page,
                        per_page: EventsPerPage
                    }
                }),
        })
    }
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