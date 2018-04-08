import { UserActions, Status } from 'Helpers/index'

export function createAction(type, object, error = {}, status) {
    return {
        type: type,
        object: object,
        error: error,
        status: status
    }
}

export function selectUser(id) {
    return createAction(
        UserActions.Get,
        id,
        null,
        Status.Ready
    )
}