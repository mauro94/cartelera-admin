import {
    EventActions,
    Status
} from 'Global/constants'

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
        case EventActions.All:
            return {
                ...state,
                all: action.object,
                status: action.status,
                error: action.error,
            }
        case EventActions.Current:
            return {
                ...state,
                current: action.object,
                status: action.status,
                error: action.error,
            }
        case EventActions.Update:
            if (action.status == Status.Ready) {
                let index = state.all.findIndex(event => event.id == action.object.id)
                if (index != -1) {
                    state.all.splice(index, 1)
                }
            }
            return {
                ...state,
                current: action.object || state.current,
                status: action.status,
                error: action.error,
                all: state.all
            }
    }
    return state
}

export default event