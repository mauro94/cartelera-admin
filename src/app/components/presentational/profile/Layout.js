import React from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import EditCurrentUser from 'Containers/currentUser/Edit'
import {
    Basic as BasicForm,
    Password as PasswordForm
} from 'Presentational/users/forms'
import 'Style/common/segmentedForm.scss';

const ProfileLayout = (props) => (
    <React.Fragment>
        <div className='title'><h1>Perfil</h1></div>
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
        current
        userToUpdate={props.user}>
        <PasswordForm />
    </EditCurrentUser>
)

const EditBasicForm = (props) => (
    <EditCurrentUser
        current
        userToUpdate={props.user}>
        <BasicForm />
    </EditCurrentUser>
)


const Links = () => (
    <div className='navbar'>
        <div>
            <NavLink
                className='navbar-button'
                activeClassName='selected'
                to={'/perfil/editar'}>
                Editar perfil
            </NavLink>
        </div>
        <div>
            <NavLink
                className='navbar-button'
                activeClassName='selected'
                to={'/perfil/contrasena'}>
                Cambiar contraseña
            </NavLink>
        </div>
    </div>
)

export default ProfileLayout