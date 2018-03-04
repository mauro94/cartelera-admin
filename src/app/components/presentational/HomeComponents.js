import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const navbarButtonUser = ({ ...props }) => (
    <button className="navbar-button" id="user">{props.user.firstName}</button>
)

export const navbarButtonEvents = ({ ...props }) => (
    <button className="navbar-button" id="events">Eventos</button>
)

export const navbarButtonCategories = ({ ...props }) => (
    <button className="navbar-button" id="categories">Categorías</button>
)

export const navbarButtonSponsors = ({ ...props }) => (
    <button className="navbar-button" id="sponsors">Sponsors</button>
)

export const navbarButtonEmpty = ({ ...props }) => (
    <button></button>
)