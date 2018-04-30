//registrees
import { RegistreeActions, Status } from 'Helpers/constants'
import { serverCall, request, headers } from './helper'
import { createAction } from 'Logic/actions'

export const allFromEventId = (eventId) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: RegistreeActions.All,
        onSuccess: (response) => {
            dispatch(createAction(
                RegistreeActions.EventId,
                eventId,
                null,
                Status.Ready
            ))
        },
        call: () => request.get(
            `events/${eventId}/registrees`, {
                headers: {
                    ...headers.withAuth()
                }
            }),
    })
}

const test = (response) => {
    console.log(response)
}