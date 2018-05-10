import { GenericServerCallActions, Status } from 'Helpers/constants'

var defaultState = {
    action: '',
    status: Status.Ready
}

function genericServerCall(state = defaultState, action) {
    switch (action.type) {
        case GenericServerCallActions.PasswordReset:
            return {
                action: action.type,
                status: action.status,
                error: action.error
            }
    }
    return state
}

export default genericServerCall