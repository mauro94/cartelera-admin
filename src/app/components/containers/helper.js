export const waitingOnAction = (prevProps, nextProps, action) => {
    return (!(prevProps.loading && prevProps.action == action) &&
        (nextProps.loading && nextProps.action == action))
}
export const actionSucceded = (wasWaiting, nextProps, action) => {
    return (wasWaiting && nextProps.ready && nextProps.action == action)
}
export const actionFailed = (wasWaiting, nextProps, action) => {
    return (wasWaiting && nextProps.failed && nextProps.action == action)
}