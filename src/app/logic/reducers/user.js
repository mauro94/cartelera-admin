import { UserActions, Entity, Status } from 'Helpers/index'
import { StateManager } from './helper'

function handleError(action) {
    switch (action.error.status) {
        case 404:
            return 'Este usuario no existe'
        default:
            return action.error.data.errors ? action.error.data.errors : action.error.data.error ? action.error.data : action.error.data.error_message
    }
}

function user(state = StateManager.defaultState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case UserActions.All:
            return {
                ...StateManager.all(state, action),
                error: action.error && handleError(action)
            }
        case UserActions.Create:
            return {
                ...StateManager.create(state, action),
                error: action.error && handleError(action)
            }
        case UserActions.Update:
            return {
                ...StateManager.update(state, action),
                error: action.error && handleError(action)
            }
        default:
            return state
    }
}

export default user