import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { UserForms } from 'Helpers/constants'
import { EditUser } from 'Containers/users'

const ProfileIndex = ({ ...props }) => (
    <div className="grid-container container-column-menu">
        <div className="container-menu-elements">
            <div className="menu-link">
                <NavLink activeClassName="menu-link-selected" to={"/dashboard/perfil/editar"}>Editar perfil</NavLink>
            </div>
            <div className="menu-link">
                <NavLink activeClassName="menu-link-selected" to={"/dashboard/perfil/contrasena"}>Cambiar contraseña</NavLink>
            </div>
        </div>
        <div className="container-menu-content">
            <Route path="/dashboard/perfil/editar" render={() => <EditUser {...props} form={UserForms.Basic} />} />
            <Route path="/dashboard/perfil/contrasena" render={() => <EditUser {...props} form={UserForms.Password} />} />
        </div>
    </div>
)

export default ProfileIndex