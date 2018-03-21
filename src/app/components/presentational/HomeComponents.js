import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { history } from 'Config/helper';

export const navbarButtonUser = ({ ...props }) => (
    <div className="dropdown">
        <NavLink className="navbar-button" activeClassName="selected-button-view" id="user-button" to={"/dashboard/profile/edit"} isActive={editProfile}>{ props.user.firstName }</NavLink>
            <div className="dropdown-content">
                <Link to={"/dashboard/profile/edit"}>Pérfil</Link>
                <Link to={"/login"} onClick={() => { props.logout() }}>Cerrar Sesión</Link>
            </div>
    </div>
)

export const navbarButtonEvents = ({ ...props }) => (
    <NavLink className="navbar-button" activeClassName="selected-button-view" id="events-button" to={"/dashboard/events/upcoming"} isActive={events}>Eventos</NavLink>
)

export const navbarButtonCategories = ({ ...props }) => (
    <NavLink className="navbar-button" activeClassName="selected-button-view" id="categories-button" to={"/dashboard/categories"}>Categorías</NavLink>
)

export const navbarButtonSponsors = ({ ...props }) => (
    <NavLink className="navbar-button" activeClassName="selected-button-view" id="sponsors-button" to={"/dashboard/sponsors"}>Sponsors</NavLink>
)

const editProfile = (match, location) => {
    if (location.pathname == "/dashboard/profile/edit")
        return true
    if (location.pathname == "/dashboard/profile/password")
        return true
    return false
}

const events = (match, location) => {
    if (location.pathname == "/dashboard")
        return true
    if (location.pathname == "/dashboard/eventos")
        return true
    if (location.pathname == "/dashboard/events/upcoming")
        return true
    if (location.pathname == "/dashboard/events/past")
        return true
    return false
}
