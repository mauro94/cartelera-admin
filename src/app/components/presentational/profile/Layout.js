import React from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import EditCurrentUser from 'Containers/currentUser/Edit'
import { Basic as BasicForm, Password as PasswordForm } from 'Presentational/users/forms'

const ProfileLayout = (props) => (
    <React.Fragment>
        <Links />
        <Routes user={props.user} />
    </React.Fragment>
)

const Routes = (props) => (
    <Switch>
        <div className='container-menu-content'>
            <Route
                exact
                path='/perfil'
                render={() => <Redirect to='/perfil/editar' />} />
            <Route
                path='/perfil/editar'
                render={() => (
                    <div>
                        hola!
                    </div>)} />
            {/*<Route
                path='/perfil/editar'
                render={() => (
                    <EditCurrentUser
                        current
                        userToUpdate={props.user}>
                        <BasicForm />
                    </EditCurrentUser>)} />
            <Route
                path='/perfil/contrasena'
                render={() => (
                    <EditCurrentUser
                        current
                        userToUpdate={props.user}>
                        <PasswordForm />
                </EditCurrentUser>)} />*/}
        </div>
    </Switch>
)

const Links = () => (
    <div className='container-menu-elements'>
        <div className='menu-link'>
            <NavLink
                className='menu-link'
                activeClassName='menu-link-selected'
                to={'/perfil/editar'}>
                Editar perfil
            </NavLink>
        </div>
        <div className='menu-link'>
            <NavLink
                className='menu-link'
                activeClassName='menu-link-selected'
                to={'/perfil/contrasena'}>
                Cambiar contraseña
            </NavLink>
        </div>
    </div>
)

export default ProfileLayout