import { Status } from 'Helpers/constants'

export const waitingOnAction = (prevReducer, nextReducer, action) => {
    return (!(prevReducer.status == Status.WaitingOnServer &&
        prevReducer.action == action) &&
        (nextReducer.status == Status.WaitingOnServer &&
            nextReducer.action == action)
    )
}
export const actionSucceded = (wasWaiting, reducer, action) => {
    return (wasWaiting &&
        reducer.status == Status.Ready &&
        reducer.action == action)
}
export const actionFailed = (wasWaiting, reducer, action) => {
    return (wasWaiting &&
        reducer.status == Status.Failed &&
        reducer.action == action)
}