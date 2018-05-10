import { EventActions, Status } from 'Helpers/constants'
import { StateManager } from './helper'

function handleError(action) {
    switch (action.error.status) {
        case 404:
            return 'Este evento no existe'
        default:
            return action.error.data
    }
}

function event(state = { ...StateManager.defaultState, filter: 'upcoming' }, action) {
    switch (action.type) {
        case EventActions.All:
            return {
                ...StateManager.all(state, action),
                error: action.error && handleError(action)
            }
        case EventActions.Create:
            return {
                ...StateManager.create(state, action),
                error: action.error && handleError(action)
            }
        case EventActions.Get:
            return {
                ...StateManager.get(state, action),
                error: action.error && handleError(action)
            }
        case EventActions.Update:
            return {
                ...StateManager.update(state, action),
                error: action.error && handleError(action)
            }
        case EventActions.Filter:
            return {
                ...state,
                filter: action.object,
                error: action.error && handleError(action)
            }
    }
    return state
}

export default event