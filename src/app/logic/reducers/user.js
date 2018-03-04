import {
    UserActions,
    Status
} from 'Config/constants'

var defaultState = {
    current: {},
    status: Status.Ready,
    error: {}
}

function user(state = defaultState, action) {
    switch (action.type) {
        case UserActions.Login:
        case UserActions.Logout:
        case UserActions.Update:
        case UserActions.Get:
            return {
                current: action.object,
                status: action.status,
                error: action.error
            }
        default:
            return state
    }
}

export default user