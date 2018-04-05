export const UserActions = Object.freeze({
    Login: 'LOGIN',
    Update: 'UPDATE_USER',
    Get: 'GET_USER',
    Logout: 'LOGOUT',
    All: 'ALL_USERS',
    Create: 'CREATE_USER',
    Avatar: 'AVATAR'
})

export const EventActions = Object.freeze({
    UserEvents: 'USEREVENTS',
    All: 'ALL_EVENTS',
    Current: 'CURRENT',
    Update: 'UPDATE'
})

export const Status = Object.freeze({
    WaitingOnServer: 'WAITING_ON_SERVER',
    WaitingOnUser: 'WAITING_ON_USER',
    Ready: 'READY',
    Failed: 'FAILED'
})

export const UserTypes = Object.freeze({
    Sponsor: 'sponsor',
    Admin: 'admin'
})

export const UserForms = Object.freeze({
    Password: 'password',
    Basic: 'basic'
})

export const Labels = Object.freeze({
    email: 'correo electrónico',
    'phone-number': 'teléfono',
    phoneNumber: 'teléfono',
    office: 'oficina',
    campus: 'campus',
    enabled: 'estado',
    passwordConfirm: 'confirmar contraseña',
    password: 'contraseña',
    firstName: 'nombre',
    lastName: 'apellido'
})