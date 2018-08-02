import { Status } from 'Helpers/constants'

export const waitingOnAction = ({ wasWaiting, reducer, action }) => {
    return !wasWaiting &&
        reducer.status == Status.WaitingOnServer &&
        reducer.action == action
}

export const actionSucceded = ({ wasWaiting, reducer, action }) =>
    (wasWaiting &&
        reducer.status == Status.Ready &&
        reducer.action == action)

export const actionFailed = ({ wasWaiting, reducer, action }) =>
    (wasWaiting &&
        reducer.status == Status.Failed &&
        reducer.action == action)
