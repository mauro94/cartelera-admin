import { RegistreeActions } from 'Helpers/constants'
import { StateManager } from './helper'

function registree({ show, ...state } = StateManager.defaultState, action) {
    switch (action.type) {
        case RegistreeActions.All:
            return StateManager.all(state, action)
    }
    return state
}

export default registree