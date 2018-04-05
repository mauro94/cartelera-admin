import React from 'react'
import { NavLink } from 'react-router-dom'

const Pill = (props) => (
    <NavLink
        className="pill"
        activeClassName="selected-pill"
        to={{
            pathname: props.path,
            hash: props.hash
        }}
        isActive={() => location.hash == props.hash}>
        {props.children}
    </NavLink>
)

export default Pill