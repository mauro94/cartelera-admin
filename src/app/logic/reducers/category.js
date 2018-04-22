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
        case CategoryActions.Update:
            return StateManager.update(state, action)
        case CategoryActions.Remove:
            return StateManager.remove(state, action)
        default:
            return state
    }
}

export default category