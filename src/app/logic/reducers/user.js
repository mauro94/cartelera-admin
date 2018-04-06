import {
    UserActions,
    Status,
    UserTypes
} from 'Helpers/constants'

var defaultState = {
    current: {},
    status: Status.Ready,
    error: {},
    all: {},
    lastAction: ''
}

const compareUsers = (a, b) => {
    if (!a.firstName && !b.firstName) {
        if (a.email > b.email)
            return 1
        else if (a.email < b.email)
            return -1
        return 0
    }
    else if ((!a.firstName && b.firstName) || a.firstName > b.firstName)
        return 1
    else if ((a.firstName && !b.firstName) || b.firstName > a.firstName)
        return -1
    return 0
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
                error: action.error,
                lastAction: action.type
            }
        case UserActions.All:
            let userDictionary = undefined
            if (action.status == Status.Ready) {
                userDictionary = {}
                let users = action.object
                users = users.sort((a, b) => compareUsers(a, b))
                users = users.map(user => user = {
                    ...user,
                    initials: getInitials(user)
                })
                userDictionary[UserTypes.Admin] = users.filter(
                    user => (user.userType == UserTypes.Admin))
                userDictionary[UserTypes.Sponsor] = users.filter(
                    user => (user.userType == UserTypes.Sponsor))
            }
            return {
                ...state,
                all: userDictionary || action.object,
                status: action.status,
                error: action.error,
                lastAction: action.type
            }
        case UserActions.Create:
            if (action.status == Status.Ready) {
                let all = state.all
                all[action.object.userType] = [
                    action.object,
                    ...state.all[action.object.userType]
                ]
                return {
                    ...state,
                    all: all,
                    status: action.status,
                    error: action.error,
                    lastAction: action.type
                }
            }
            return {
                ...state,
                status: action.status,
                error: action.error,
                lastAction: action.type
            }
        default:
            return state
    }
}

export default user