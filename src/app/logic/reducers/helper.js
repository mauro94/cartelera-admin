import { Status, Entity, EventActions } from 'Helpers/index'

export const StateManager = {
    defaultState: {
        action: '',
        all: {},
        error: {},
        show: {},
        status: Status.Ready
    },
    update: (oldState, action) => {
        let newState = Object.assign({}, oldState)
        if (action.status == Status.Ready && !Entity.isEmpty(newState.all)) {
            let index = newState.all.findIndex(
                object => (object.id == action.object.id))
            newState.all[index] = action.object
        }
        switch (action.status) {
            case Status.Ready:
                return {
                    ...newState,
                    action: action.type,
                    error: action.error,
                    show: action.object,
                    status: action.status
                }
            default:
                return {
                    ...newState,
                    action: action.type,
                    error: action.error,
                    status: action.status
                }
        }
    },
    get: (oldState, action) => {
        switch (action.status) {
            case Status.Ready:
                return {
                    ...oldState,
                    action: action.type,
                    error: action.error,
                    show: action.object,
                    status: action.status
                }
            default:
                return {
                    ...oldState,
                    action: action.type,
                    error: action.error,
                    status: action.status
                }
        }
    },
    all: (oldState, action) => {
        switch (action.status) {
            case Status.Ready:
                return {
                    ...oldState,
                    all: action.object,
                    status: action.status,
                    error: action.error,
                    action: action.type,
                    show: action.object ? action.object[0] : oldState.show
                }
            default:
                return {
                    ...oldState,
                    action: action.type,
                    error: action.error,
                    status: action.status
                }
        }
    },
    create: (oldState, action) => {
        switch (action.status) {
            case Status.Ready:
                let newState = Object.assign({}, oldState)
                newState.all = [action.object, ...oldState.all]
                newState.show = action.object
                return {
                    ...newState,
                    action: action.type,
                    error: action.error,
                    status: action.status
                }
            default:
                return {
                    ...oldState,
                    action: action.type,
                    error: action.error,
                    status: action.status
                }
        }
    },
    remove: (oldState, action) => {
        let newState = Object.assign({}, oldState)
        if (action.status == Status.Ready) {
            let index = newState.all.findIndex(
                object => (object.id == action.object.id))
            newState.all[index] = {}
        }
        switch (action.status) {
            case Status.Ready:
                return {
                    ...newState,
                    action: action.type,
                    error: action.error,
                    show: action.object,
                    status: action.status
                }
            default:
                return {
                    ...newState,
                    action: action.type,
                    error: action.error,
                    status: action.status
                }
        }
    }
}