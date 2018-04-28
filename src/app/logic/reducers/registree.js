import { RegistreeActions, Status } from 'Helpers/constants'
import { StateManager } from './helper'

var defaultState = {
    action: '',
    error: {},
    all: {},
    status: Status.Ready,
    eventId: -1
}

function registree(state = defaultState, action) {
    switch (action.type) {
        case RegistreeActions.EventId:
            return {
                ...state,
                action: action.type,
                eventId: action.object
            }
        case RegistreeActions.All:
            if (action.status == Status.Ready) {
                return {
                    ...state,
                    action: action.type,
                    all: action.object,
                    status: Status.Ready
                }
            }
            else if (action.status == Status.Failed) {
                return {
                    ...state,
                    action: action.type,
                    error: action.error,
                    status: Status.Failed,
                }
            }
    }
    return state
}

export default registree