import Yup from 'yup'

export const EventsPerPage = Object.freeze(12)

export const RegistreeActions = Object.freeze({
    All: 'ALL_REGISTREES',
    EventId: 'EVENT_ID_REGISTREES'
})

export const EventActions = Object.freeze({
    All: 'ALL_EVENTS',
    Create: 'CREATE_EVENT',
    CurrentPage: 'CURRENT_EVENT_PAGE',
    Get: 'GET_EVENT',
    Update: 'UPDATE_EVENT',
    Filter: 'FILTER_EVENT'
})

export const GenericServerCallActions = Object.freeze({
    PasswordReset: 'PASSWORD_RESET'
})

export const CategoryActions = Object.freeze({
    All: 'ALL_CATEGORIES',
    Create: 'CREATE_CATEGORY',
    Update: 'UPDATE_CATEGORY',
    Remove: 'REMOVE_CATEGORY'
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
    admin: 'admin',
    sponsors: 'sponsor',
    admins: 'admin'
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
    enabled: 'estatus',
    passwordConfirm: 'confirmar contraseña',
    password: 'contraseña',
    firstName: 'nombre',
    lastName: 'apellido',
    upcoming: 'próximos',
    past: 'pasados',
    name: 'nombre',
    description: "descripción",
    category: "categoría",
    categoryId: 'categoría',
    rangeDatetime: "fecha y hora",
    startDatetime: "inicio: fecha y hora de inicio",
    endDatetime: "fin: fecha y hora de fin",
    cost: "costo",
    majors: "carreras invitadas",
    location: "ubicación",
    contactName: "nombre",
    contactEmail: "correo electrónico",
    contactPhone: "teléfono",
    publicEvent: "Abierto a todo el público",
    facebookUrl: "facebook",
    twitterUrl: "twitter",
    petFriendly: "pet-friendly",
    languages: "idiomas ofrecidos",
    registrationUrl: "liga de registro exterior (e.g. Google Forms)",
    registrationMessage: "mensaje de confirmación de registro",
    registrationDeadline: "fecha límite de registro",
    requirementsToRegister: "requerimientos para registrarse",
    hasRegistration: "usar funcionalidad de registro de la página",
    hasDeadline: "registro tiene fecha límite",
    tagNames: "temas relacionados",
    photo: "imagen del evento",
    schedule: "horario del evento",
    categoryName: 'categoría',
    pastEvents: 'eventos pasados',
    upcomingEvents: 'eventos próximos',
    totalEvents: 'eventos totales',
    hasCapacity: 'registro tiene cupo limitado',
    maxCapacity: 'número máximo de personas registradas'
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
        .required("Teléfono requerido")
})

export const BasicUserFormValidations = Object.freeze({
    firstName: Yup.string().required("Nombre requerido"),
    lastName: Yup.string().required("Apellido requerido"),
    office: Yup.string(),
    phoneNumber: Yup.string()
        .matches(/^\+?\d+$/, "Teléfono inválido")
        .min(8, "Mínimo 8 caracteres")
})

export const PasswordFormValidations = Object.freeze({
    password: Yup.string()
        .min(6, "Mínimo 6 caracteres").required("Contraseña requerida"),
    passwordConfirm: Yup.string()
        .required("Confirmación de contraseña requerida")
        .oneOf([Yup.ref('password'), null], "Contraseñas deben ser iguales")
})

export const LoginFormValidations = Object.freeze({
    email: Yup.string().email("Correo no valido")
        .required("Correo requerido"),
    password: PasswordFormValidations.password
})

var imgUrlRegex = new RegExp(/.*(jpg|gif|png)/i)

export const EventFormValidations = Object.freeze({
    name: Yup.string().required("Nombre requerido"),
    schedule: Yup.string().matches(imgUrlRegex, 'Liga de imagen inválida'),
    photo: Yup.string().matches(imgUrlRegex, 'Liga de imagen inválida').required('Imagen requerida'),
    description: Yup.string().max(CharacterCount, `Limite de ${CharacterCount} caracteres superado. `).required("Descripción requerida"),
    location: Yup.string().required("Ubicación requerida"),
    cost: Yup.string().matches(/(?=.*?\d)^(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, "Costo inválido"),
    contactName: Yup.string().required("Nombre requerido"),
    contactEmail: Yup.string().email("Correo no valido").required("Correo requerido"),
    contactPhone: Yup.string()
        .matches(/^\+?\d+$/, "Teléfono inválido")
        .min(8, "Mínimo 8 caracteres"),
    registrationMessage: Yup.string().max(CharacterCount, `Limite de ${CharacterCount} caracteres superado. `)
})

export const CategoryFormValidations = Object.freeze({
    name: Yup.string().required("Nombre requerido")
})