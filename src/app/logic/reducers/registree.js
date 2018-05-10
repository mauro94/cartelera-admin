import { RegistreeActions, Status } from 'Helpers/constants'
import { StateManager } from './helper'

var defaultState = {
    action: '',
    error: {},
    all: {},
    status: Status.Ready,
    eventId: -1
}

function handleError(action) {
    switch (action.error.status) {
        case 404:
            return 'Este correo no existe en la lista de registrados'
        default:
            return action.error.data.errors ? action.error.data.errors : action.error.data.error_message
    }
}

function registree(state = defaultState, action) {
    switch (action.type) {
        case RegistreeActions.EventId:
            switch (action.status) {
                case Status.Ready:
                    return {
                        ...state,
                        action: action.type,
                        eventId: action.object,
                        error: action.error && handleError(action)
                    }
                default:
                    return {
                        ...state,
                        action: action.type,
                        error: action.error && handleError(action),
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
                        error: action.error && handleError(action),
                        status: action.status
                    }
            }
    }
    return state
}

export default registree