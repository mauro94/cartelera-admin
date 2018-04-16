import { CategoryActions, Entity } from 'Helpers/index'
import { StateManager } from './helper'

function category(state = StateManager.defaultState, action) {
    switch (action.type) {
        case CategoryActions.All:
            return StateManager.all(state, action)
        case CategoryActions.Create:
            return {
                ...StateManager.create(state, action),
                error: action.error && 'La categoría ya esta en uso.'
            }
        case CategoryActions.Get:
            let newState = Object.assign({}, state)
            let showIndex = newState.all.findIndex(category =>
                (category.id == action.object))
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
        case CategoryActions.Update:
            return StateManager.update(state, action)
        default:
            return state
    }
}

export default category