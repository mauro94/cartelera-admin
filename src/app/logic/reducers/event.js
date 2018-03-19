import {
    EventActions,
    Status
} from 'Config/constants'

var defaultState = {
    all: [],
    status: Status.Ready,
    error: {}
}

function event(state = defaultState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    switch (action.type) {
        case EventActions.UserEvents:
            return {
                all: action.object,
                status: action.status,
                error: action.error
            }
    }
    return state
}

export default event