import { EventActions } from 'Helpers/constants'
import { StateManager } from './helper'

function event(state = StateManager.defaultState, action) {
    switch (action.type) {
        case EventActions.All:
            return StateManager.all(state, action)
        case EventActions.Create:
            return StateManager.create(state, action)
        case EventActions.Get:
            return StateManager.get(state, action)
        case EventActions.Update:
            return StateManager.update(state, action)
    }
    return state
}

export default event