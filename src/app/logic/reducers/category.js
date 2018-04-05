import {
    CategoryActions,
    Status
} from 'Config/constants'

var defaultState = {
    all: [],
    status: Status.Ready,
    error: {}
}

function category(state = defaultState, action) {
    switch (action.type) {
        case CategoryActions.All:
            return {
                ...state,
                all: action.object,
                status: action.status,
                error: action.error,
            }
        case CategoryActions.Update:
            if (action.status == Status.Ready) {
                let index = state.all.findIndex(category => category.id == action.object.id)
                if (index != -1){
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
        case CategoryActions.Create:
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

export default category