import {
    SessionActions,
    Status
} from 'Config/constants'

var defaultState = {
    current: {},
    status: Status.Ready,
    error: {}
}

function session(state = defaultState, action) {
    switch (action.type) {
        case SessionActions.Login:
            return {
                current: action.object,
                status: action.status,
                error: action.error
            }
        default:
            return state
    }
}

export default session