import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from 'Images/logo.svg'

export const UsersLink = () => (
    <NavLink
        className='navbar-button'
        activeClassName='selected-button-view'
        id='users-button'
        to={'/usuarios'}>
        Usuarios
    </NavLink>
)

export const CategoriesLink = () => (
    <NavLink
        className='navbar-button'
        activeClassName='selected-button-view'
        id='categories-button'
        to={'/categorias'}>
        Categorías
    </NavLink>
)

export const EventsLink = () => (
    <NavLink
        className='navbar-button'
        activeClassName='selected-button-view'
        id='events-button'
        to={'/eventos'}>
        Eventos
    </NavLink>
)

export const UpcomingLink = () => (
    <Link to={'/eventos'}>
        <img className='logo' src={logo} />
    </Link>
)

export const ProfileLinks = props => (
    <div className='dropdown' >
        <NavLink
            className='navbar-button'
            activeClassName='selected-button-view'
            id='user-button'
            to={'/perfil'}>
            {props.name}
        </NavLink>
        <div className='dropdown-content'>
            <Link to={'/perfil/editar'}>Perfil</Link>
            <Link
                to={'/login'}
                onClick={() => { props.logout() }}>
                Cerrar Sesión
            </Link>
        </div>
    </div>
)