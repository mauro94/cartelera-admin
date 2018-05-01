import { UserActions, Entity, Status} from 'Helpers/index'
import { StateManager } from './helper'

function user(state = StateManager.defaultState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case UserActions.All:
            return StateManager.all(state, action)
        case UserActions.Create:
            return {
                ...StateManager.create(state, action),
                error: action.error && 'El correo ya está registrado en el sistema'
            }
        case UserActions.Get:
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