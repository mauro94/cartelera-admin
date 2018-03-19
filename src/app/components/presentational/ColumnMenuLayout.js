import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { history } from 'Config/helper'
import EditProfile from 'Containers/EditProfile'

const ColumnMenuLayout = ({ ...props }) => (
    <div className="grid-container container-column-menu">
        <div className="container-menu-elements">
            <div className="menu-link">
                <NavLink activeClassName="menu-link-selected" to={"/dashboard/profile/edit"}>Editar Pérfil</NavLink>
            </div>
            <div className="menu-link">
                <NavLink activeClassName="menu-link-selected" to={"/dashboard/profile/password"}>Cambiar Contraseña</NavLink>
            </div>
        </div>
        <div className="container-menu-content">
            <Route path="/dashboard/profile/edit" render={() => <EditProfile {...props} />} />
            <Route path="/dashboard/profile/password" render={() => <EditProfile {...props} />} />
        </div>
    </div>
)

export default ColumnMenuLayout