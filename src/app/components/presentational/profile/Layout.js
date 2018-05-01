import React from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import EditCurrentUser from 'Containers/currentUser/Edit'
import { Button } from 'Presentational/elements'
import {
    Basic as BasicForm,
    Password as PasswordForm
} from 'Presentational/users/forms'
import 'Style/common/segmentedForm.scss'

const Action = (props) => {
    return (
        <a className='action-button-container'>
            <Button
                type={props.type}
                className='action-button'
                handleClick={() => {props.logout()}}>
                {props.children}
            </Button>
            <span>{props.label}</span>
        </a>
    )
}

const ProfileLayout = (props) => (
    <React.Fragment>
        <div className='title'>
            <div className="top-container">
                <div className="header-stick">
                <h1> Perfil</h1>
                </div>
                <div className='actions-container'>
                <Action
                    type='icon-button dark'
                    logout={props.logout}
                    label='Cerrar sesión'>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Action>
                </div>
            </div>
        </div>
        <div className='profile-container'>
            <Links />
            <SwitchRoutes user={props.user} />
        </div>
    </React.Fragment>
)

const SwitchRoutes = (props) => (
    <Switch>
        <Routes user={props.user} />
    </Switch>
)

const Routes = (props) => (
    <div className='profile-content'>
        <Route
            exact
            path='/perfil'
            render={() => <Redirect to='/perfil/editar' />} />
        <Route
            path='/perfil/editar'
            render={() => <EditBasicForm user={props.user} />} />
        <Route
            path='/perfil/contrasena'
            render={() => <EditPasswordForm user={props.user} />} />
    </div>
)

const EditPasswordForm = (props) => (
    <EditCurrentUser
        userToUpdate={{ id: props.user.id, password: '', confirmPassword: '' }}>
        <PasswordForm/>
    </EditCurrentUser>
)

const EditBasicForm = (props) => (
    <EditCurrentUser
        userToUpdate={props.user}>
        <BasicForm showModal/>
    </EditCurrentUser>
)

const Links = () => (
    <div className='navbar'>
        <div>
            <NavLink
                className='navbar-button callout right'
                activeClassName='selected'
                to={'/perfil/editar'}>
                Perfil
            </NavLink>
        </div>
        <div>
            <NavLink
                className='navbar-button callout right'
                activeClassName='selected'
                to={'/perfil/contrasena'}>
                Contraseña
            </NavLink>
        </div>
    </div>
)

export default ProfileLayout