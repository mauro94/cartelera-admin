import React from 'react'
import { NavLink } from 'react-router-dom'

const Pill = (props) => (
    <NavLink
        className="pill"
        activeClassName="selected-pill"
        to={props.path}>
        {props.children}
    </NavLink>
)

export default Pill