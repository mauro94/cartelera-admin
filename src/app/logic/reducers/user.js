import {
    UserActions,
    Status
} from 'Config/constants'

var defaultState = {
    current: {},
    status: Status.Ready,
    error: {},
    all: []
}

function user(state = defaultState, action) {
    switch (action.type) {
        case UserActions.Login:
        case UserActions.Logout:
        case UserActions.Update:
        case UserActions.Get:
            return {
                ...state,
                current: action.object,
                status: action.status,
                error: action.error
            }
        case UserActions.All:
            return {
                ...state,
                all: action.object,
                status: action.status,
                error: action.error
            }
        case UserActions.Create:
            let all = state.all
            if (action.status == Status.Ready) {
                all = [...state.all, action.object]
                return {
                    ...state,
                    all: all,
                    status: action.status,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export default user