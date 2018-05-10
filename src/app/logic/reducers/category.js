import { CategoryActions, Entity, Status } from 'Helpers/index'
import { StateManager } from './helper'

function handleError(action) {
    switch (action.error.status) {
        case 404:
            return 'Esta categoría no existe'
        default:
            return action.error.data.errors ? action.error.data.errors : action.error.data.error_message
    }
}

function category(state = StateManager.defaultState, action) {
    switch (action.type) {
        case CategoryActions.All:
            return {
                ...StateManager.all(state, action),
                error: action.error && handleError(action)
            }
        case CategoryActions.Create:
            return {
                ...StateManager.create(state, action),
                error: action.error && handleError(action)
            }
        case CategoryActions.Update:
            return {
                ...StateManager.update(state, action),
                error: action.error && handleError(action)
            }
        case CategoryActions.Remove:
            return {
                ...StateManager.remove(state, action),
                error: action.error && handleError(action)
            }
        default:
            return state
    }
}

export default category