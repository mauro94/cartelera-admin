import { UserActions, Entity } from 'Helpers/index'
import { StateManager } from './helper'

function user(state = StateManager.defaultState, action) {
    switch (action.type) {
        case UserActions.All:
            return StateManager.all(state, action)
        case UserActions.Create:
            return StateManager.create(state, action)
        case UserActions.Get:
            let newState = Object.assign({}, state)
            let showIndex = newState.all.findIndex(user =>
                (user.id == action.object))
            let newShow = newState.all[showIndex]
            newShow.selected = true
            if (!Entity.isEmpty(state.show)) {
                newState.show.selected = false
            }
            return {
                ...newState,
                show: newShow,
                action: action.type
            }
        case UserActions.Update:
            return StateManager.update(state, action)
        default:
            return state
    }
}

export default user