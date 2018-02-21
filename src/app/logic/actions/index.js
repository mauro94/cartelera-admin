export function createAction(type, object, error = {}, status) {
    return {
        type: type,
        object: object,
        error: error,
        status: status
    }
}