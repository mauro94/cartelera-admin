import Yup from 'yup'

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

export const Status = Object.freeze({
    WaitingOnServer: 'WAITING_ON_SERVER',
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

export const Months = Object.freeze([
    "enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"
])

export const TemporaryPassword = Object.freeze('123456')

export const FormValidations = Object.freeze({
    password: Yup.string()
        .min(6, "Mínimo 6 caracteres")
        .required("Contraseña requerida"),
    passwordConfirm: Yup.string()
        .required("Confirmación de contraseña requerida")
        .oneOf([Yup.ref('password'), null], "Contraseñas deben ser iguales"),
    firstName: Yup.string()
        .required("Nombre requerido"),
    lastName: Yup.string()
        .required("Apellido requerido"),
    office: Yup.string()
        .required("Oficina requerida"),
    phoneNumber: Yup.string()
        .matches(/^\+?\d+$/, "Teléfono inválido")
        .min(8, "Mínimo 8 caracteres")
        .required("Teléfono requerido"),
    email: Yup.string().email("Correo no valido")
        .required("Correo requerido"),
})