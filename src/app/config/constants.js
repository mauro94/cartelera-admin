export const UserActions = Object.freeze({
    Login: 'LOGIN',
    Update: 'UPDATE_USER',
    Get: 'GET_USER',
    Logout: 'LOGOUT',
    All: 'ALL_USERS',
    Create: 'CREATE_USER'
})

export const EventActions = Object.freeze({
    UserEvents: 'USEREVENTS',
    All: 'ALL_EVENTS',
    Current: 'CURRENT',
    Update: 'UPDATE'
})

export const CategoryActions = Object.freeze({
    All: 'ALL_CATEGORIES',
    Update: 'UPDATE_CATEGORY',
    Create: 'CREATE_CATEGORY'
})

export const Status = Object.freeze({
    WaitingOnServer: 'WAITING_ON_SERVER',
    WaitingOnUser: 'WAITING_ON_USER',
    Ready: 'READY',
    Failed: 'FAILED'
})
