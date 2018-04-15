import Yup from 'yup'

export const EventActions = Object.freeze({
    All: 'ALL_EVENTS',
    Create: 'CREATE_EVENT',
    Get: 'GET_EVENT',
    Update: 'UPDATE_EVENT'
})

export const CategoryActions = Object.freeze({
    All: 'ALL_CATEGORIES',
    Create: 'CREATE_CATEGORY',
    Update: 'UPDATE_CATEGORY',
    Get: "GET_CATEGORY"
})

export const SessionActions = Object.freeze({
    Login: 'LOGIN',
    Logout: 'LOGOUT',
})

export const CurrentUserActions = Object.freeze({
    Get: 'GET_CURRENT_USER',
    Update: 'UPDATE_CURRENT_USER'
})

export const UserActions = Object.freeze({
    All: 'ALL_USERS',
    Create: 'CREATE_USER',
    Get: 'GET_USER',
    Update: 'UPDATE_USER'
})

export const Status = Object.freeze({
    WaitingOnServer: 'WAITING_ON_SERVER',
    Ready: 'READY',
    Failed: 'FAILED'
})

export const UserTypes = Object.freeze({
    Sponsor: 'sponsor',
    Admin: 'admin',
    sponsor: 'sponsor',
    admin: 'admin'
})

export const UserForms = Object.freeze({
    Password: 'password',
    Basic: 'basic'
})

export const Labels = Object.freeze({
    email: 'correo electrónico',
    phoneNumber: 'teléfono',
    office: 'oficina',
    campus: 'campus',
    enabled: 'estado',
    passwordConfirm: 'confirmar contraseña',
    password: 'contraseña',
    firstName: 'nombre',
    lastName: 'apellido',
    upcoming: 'próximos',
    past: 'pasados'
})

export const Months = Object.freeze([
    "enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"
])

// bad security
export const TemporaryPassword = Object.freeze('123456')

export const CharacterCount = Object.freeze(750)

export const CurrentUserFormValidations = Object.freeze({
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
        .required("Correo requerido")
})

export const BasicUserFormValidations = Object.freeze({
    firstName: Yup.string(),
    lastName: Yup.string(),
    office: Yup.string(),
    phoneNumber: Yup.string()
        .matches(/^\+?\d+$/, "Teléfono inválido")
        .min(8, "Mínimo 8 caracteres"),
    email: Yup.string().email("Correo no valido")
})

export const PasswordFormValidations = Object.freeze({
    password: Yup.string()
        .min(6, "Mínimo 6 caracteres")
        .required("Contraseña requerida"),
    passwordConfirm: Yup.string()
        .required("Confirmación de contraseña requerida")
        .oneOf([Yup.ref('password'), null], "Contraseñas deben ser iguales")
})

export const EventFormValidations = Object.freeze({
    name: Yup.string().required("Nombre requerido"),
    description: Yup.string().max(CharacterCount, ` (Limite de ${CharacterCount} caracteres superado)`).required(" (Descripción requerida)"),
    location: Yup.string().required("Ubicación requerida")
})