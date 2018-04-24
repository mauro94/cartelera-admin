import { SessionActions, Status, CurrentUserActions } from 'Helpers/constants'
import { StateManager } from './helper'

var defaultState = {
    action: '',
    error: {},
    show: {},
    status: Status.Ready
}

function currentUser(state = defaultState, action) {
    switch (action.type) {
        case SessionActions.Login:
        case SessionActions.Logout:
        case CurrentUserActions.Get:
            return StateManager.get(state, action)
        case CurrentUserActions.Update:
            return StateManager.update(state, action)
        default:
            return state
    }
}

export default currentUser