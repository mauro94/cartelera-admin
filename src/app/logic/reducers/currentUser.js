import { SessionActions, Status, CurrentUserActions } from 'Helpers/constants'
import { StateManager } from './helper'

var defaultState = {
    action: '',
    error: {},
    show: {},
    status: Status.Ready
}

function handleError(action) {
    switch (action.error.status) {
        case 404:
            return 'Este usuario no existe'
        default:
            return action.error.data.errors ? action.error.data.errors : action.error.data.error ? action.error.data : action.error.data.error_message
    }
}

function currentUser(state = defaultState, action) {
    switch (action.type) {
        case SessionActions.Login:
        case SessionActions.Logout:
        case CurrentUserActions.Get:
            return {
                ...StateManager.get(state, action),
                error: action.error && handleError(action)
            }
        case CurrentUserActions.Update:
            return {
                ...StateManager.update(state, action),
                error: action.error && handleError(action)
            }
        default:
            return state
    }
}

export default currentUser