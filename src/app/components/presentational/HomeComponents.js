import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { history } from 'Config/helper';

export const navbarButtonUser = ({ ...props }) => (
    <div className="dropdown">
        <button className="navbar-button" id="user-button">{props.user.firstName}</button>
            <div className="dropdown-content">
                <Link to={"/dashboard/profile/edit"} onClick={() => { addColorSelectedButton("user-button") }}>Pérfil</Link>
                <Link to={"/login"} onClick={() => { props.logout() }}>Cerrar Sesión</Link>
            </div>
    </div>
)

export const navbarButtonEvents = ({ ...props }) => (
    <button className="navbar-button selected-button-view" id="events-button" onClick={() => {addColorSelectedButton("events-button"); history.replace('/dashboard/events') }}>Eventos</button>
)

export const navbarButtonCategories = ({ ...props }) => (
    <button className="navbar-button" id="categories-button" onClick={() => { addColorSelectedButton("categories-button"); history.replace('/dashboard/categories') }}>Categorías</button>
)

export const navbarButtonSponsors = ({ ...props }) => (
    <button className="navbar-button" id="sponsors-button" onClick={() => { addColorSelectedButton("sponsors-button"); history.replace('/dashboard/sponsors') }}>Sponsors</button>
)

function addColorSelectedButton(selectedButtonId) {
    var users = document.getElementById("user-button")
    var events = document.getElementById("events-button")
    var categories = document.getElementById("categories-button")
    var sponsors = document.getElementById("sponsors-button")

    if (categories == null && sponsors == null) {
        users.className = "navbar-button"
        events.className = "navbar-button"
    }
    else {
        users.className = "navbar-button"
        events.className = "navbar-button"
        categories.className = "navbar-button"
        sponsors.className = "navbar-button"
    }

    var selectedButton = document.getElementById(selectedButtonId)
    selectedButton.className += " selected-button-view"
}