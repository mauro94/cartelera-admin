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
            switch (action.status) {
                case Status.Ready:
                    return {
                        ...state,
                        action: action.type,
                        eventId: action.object
                    }
                default:
                    return {
                        ...state,
                        action: action.type,
                        error: action.error,
                        status: action.status
                    }
            }
        case RegistreeActions.All:
            switch (action.status) {
                case Status.Ready:
                    return {
                        ...state,
                        action: action.type,
                        all: action.object,
                        status: Status.Ready
                    }
                default:
                    return {
                        ...state,
                        action: action.type,
                        error: action.error,
                        status: action.status
                    }
            }
    }
    return state
}

export default registree