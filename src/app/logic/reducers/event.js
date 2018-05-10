import { EventActions, Status } from 'Helpers/constants'
import { StateManager } from './helper'

function handleError(action) {
    switch (action.error.status) {
        case 404:
            return 'Este evento no existe'
        default:
            return action.error.data.errors ? action.error.data.errors : action.error.data.error_message
    }
}

let defaultState = {
    ...StateManager.defaultState,
    currentPage: 1,
    filter: 'upcoming',
    count: 0,
    totalPages: 1
}

function event(state = defaultState, action) {
    switch (action.type) {
        case EventActions.CurrentPage:
            return {
                ...state,
                currentPage: action.object
            }
        case EventActions.All:
            let count = action.object ? action.object.total : state.count
            let totalPages = action.object ? action.object.pages : state.totalPages
            let events = action.object ? action.object.events : null
            return {
                ...StateManager.all(state, { ...action, object: events }),
                count: count,
                error: action.error && handleError(action),
                totalPages: totalPages
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