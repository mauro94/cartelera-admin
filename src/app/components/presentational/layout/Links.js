import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from 'Images/logo.svg'
import { UserAvatar } from 'Presentational/elements'

export const UsersLink = () => (
    <NavLink
        className='navbar-button'
        activeClassName='selected'
        id='users-button'
        to={'/usuarios'}>
        Usuarios
    </NavLink>
)

export const CategoriesLink = () => (
    <NavLink
        className='navbar-button'
        activeClassName='selected'
        id='categories-button'
        to={'/categorias'}>
        Categorías
    </NavLink>
)

export const EventsLink = () => (
    <NavLink
        className='navbar-button'
        activeClassName='selected'
        id='events-button'
        to={'/eventos'}>
        Eventos
    </NavLink>
)

export const UpcomingLink = () => (
    <Link to={'/eventos'}>
        <img className='logo' height="50" src={logo}/>
    </Link>
)

export const ProfileLinks = props => (
    <NavLink
        className='navbar-button'
        activeClassName='selected'
        id='user-button'
        to={'/perfil'}>
        <UserAvatar size={25} user={props.user} />
        <div>{props.user.firstName}</div>
    </NavLink>
)