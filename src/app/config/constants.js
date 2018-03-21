export const UserActions = Object.freeze({
    Login: 'LOGIN',
    Update: 'UPDATE_USER',
    Get: 'GET_USER',
    Logout: 'LOGOUT'
})

export const EventActions = Object.freeze({
    UserEvents: 'USEREVENTS',
    All: 'ALL',
    Current: 'CURRENT',
    Update: 'UPDATE'
})

export const Status = Object.freeze({
    WaitingOnServer: 'WAITING_ON_SERVER',
    WaitingOnUser: 'WAITING_ON_USER',
    Ready: 'READY',
    Failed: 'FAILED'
})
