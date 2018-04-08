import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import decode from 'jwt-decode'
import { thunks } from 'Logic/actions/thunks'
import { UserActions, Status } from 'Config/constants'
import { update } from 'Logic/actions/thunks/user';
import Yup from 'yup'

export const haveSameKeys = (a, b) => {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}

export var formValidations = {
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
        .required("Teléfono requerido")
}

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null || object.length == 0
}

export const request = axios.create({
    //baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
    baseURL: 'https://cartelera-api.herokuapp.com/',
    headers: {
        'Accept': 'application/vnd.cartelera-api.v1',
    }
})

export const history = createBrowserHistory()

export const loggedIn = () => {
    return !isEmpty(localStorage.getItem('SESSION_TOKEN'))
}

export const setSession = (token, id, isNewbie) => {
    localStorage.setItem('SESSION_TOKEN', token)
    localStorage.setItem('SESSION_USER_ID', id)
    localStorage.setItem('SESSION_USER_IS_NEWBIE', isNewbie)
}

export const getToken = () => {
    return localStorage.getItem('SESSION_TOKEN')
}

export const getSessionUserId = () => {
    return localStorage.getItem('SESSION_USER_ID')
}

export const isCurrentUserNewbie = () => {
    return (localStorage.getItem('SESSION_USER_IS_NEWBIE') == 'true')
}

export const setCurrentUserNewbie = (isNewbie) => {
    localStorage.setItem('SESSION_USER_IS_NEWBIE', isNewbie)
}
export const rmSession = () => {
    localStorage.removeItem('SESSION_TOKEN')
    localStorage.removeItem('SESSION_USER_ID')
    localStorage.removeItem('SESSION_USER_IS_NEWBIE')
}

export const isActive = to => (match, location) => location.pathname.includes(to)

export const capitalizeFirstLetter = (string) => (
    string.charAt(0).toUpperCase() + string.slice(1)
)

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

export const getInitials = (user) => {
    return user.firstName ?
        `${user.firstName[0]} ${user.lastName[0]}`
        : user.email[0]
}

export const getUserTitle = (user) => {
    return user.firstName ?
        `${user.firstName} ${user.lastName}`
        : user.email
}

export const withAuth = (Component) => {
    class AuthenticatedComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                component: <p>Loading...</p>
            }
        }
        componentWillMount() {
            if (isEmpty(this.props.user) || isEmpty(this.props.user.email)) {
                if (!loggedIn())
                    history.replace('/login')
                else {
                    //TODO: ask server if token is valid
                    //if not, rmToken and redirect to login
                    this.props.getUser(getSessionUserId())
                    if (isCurrentUserNewbie() && this.props.location.pathname != "/login/newbie") {
                        history.replace('/login/newbie')
                    }
                }
            }
            else if (loggedIn() && !this.props.loading) {
                this.setState({
                    component: <Component {...this.props} />
                })
            }
        }
        componentWillReceiveProps(nextProps) {
            if (this.props.loading && nextProps.ready && !isEmpty(nextProps.user)) {
                this.setState({
                    component: <Component {...nextProps} />
                })
            }
        }
        render() {
            return this.state.component
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.user.current,
            loading: state.user.status == Status.WaitingOnServer,
            ready: state.user.status == Status.Ready
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            getUser: (id) => dispatch(thunks.user.get(id))
            //getUser: () => dispatch(thunks.user.logout())
        }
    }
    return withRouter(connect(
        mapStateToProps,
        mapDispatchToProps)
        (AuthenticatedComponent))
}

export const objectToSnakeCase = (objectName, object) => {
    var snakeCase = require('snake-case');
    var snakeObject = {}

    snakeObject[objectName] = {}

    for (var key in object) {
        snakeObject[objectName][snakeCase(key)] = object[key]
    }

    return snakeObject
}

const month = ["enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"]

export const formatDate = (eventDate) => {
    let d = new Date(eventDate)
    return d.getDate() + " de " + month[d.getMonth()]
}

export var labels = {
    email: 'correo electrónico',
    'phone-number': 'teléfono',
    phoneNumber: 'teléfono',
    office: 'oficina',
    campus: 'campus',
    enabled: 'estado'
}