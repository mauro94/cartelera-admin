import React from 'react'

import { Link, NavLink } from "react-router-dom"
import { isActive } from 'Helpers/index'
import logo from 'Images/logo.svg'

export const UsersLink = () => (
    <NavLink
        className="navbar-button"
        activeClassName="selected-button-view"
        id="users-button"
        to={"/dashboard/usuarios"}>
        Usuarios
    </NavLink>
)

export const CategoriesLink = () => (
    <NavLink
        className="navbar-button"
        activeClassName="selected-button-view"
        id="categories-button"
        to={"/dashboard/categories"}>
        Categorías
    </NavLink>
)

export const EventsLink = () => (
    <NavLink
        className="navbar-button"
        activeClassName="selected-button-view"
        id="events-button"
        to={"/dashboard/events/upcoming"}
        isActive={isActive('event')}>
        Eventos
    </NavLink>
)

export const UpcomingLink = () => (
    <Link to={"/dashboard/events/upcoming"}>
        <img className="logo" src={logo} />
    </Link>
)

export const ProfileLinks = props => (
    <div className="dropdown" >
        <NavLink
            className="navbar-button"
            activeClassName="selected-button-view"
            id="user-button"
            to={"/dashboard/perfil/editar"}
            isActive={isActive('perfil')}>
            {props.name}
        </NavLink>
        <div className="dropdown-content">
            <Link to={"/dashboard/perfil/editar"}>Perfil</Link>
            <Link
                to={"/login"}
                onClick={() => { props.logout() }}>
                Cerrar Sesión
            </Link>
        </div>
    </div>
)