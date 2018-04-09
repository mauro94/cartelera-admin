import React from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import { UserForms } from 'Helpers/constants'
import { Edit as EditUser } from 'Containers/users'

const ProfileLayout = (props) => (
    <div className='grid-container container-column-menu'>
        <Links />
        <Routes user={props.user} />
    </div >
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
                render={() => <EditUser current user={props.user} form={UserForms.Basic} />} />
            <Route
                path='/perfil/contrasena'
                render={() => <EditUser current user={props.user} form={UserForms.Password} />} />
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