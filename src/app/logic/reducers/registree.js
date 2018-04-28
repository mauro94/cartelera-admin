import { RegistreeActions, Status } from 'Helpers/constants'
import { StateManager } from './helper'

var defaultState = {
    action: '',
    error: {},
    all: {},
    status: Status.Ready,
    eventId: -1
}

function registree(state = defaultState, action) {
    switch (action.type) {
        case RegistreeActions.All:
            return {
                ...StateManager.all(state, action),
                eventId: eventId
            }
    }
    return state
}

export default registree