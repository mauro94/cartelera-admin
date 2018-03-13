import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { history } from 'Config/helper'
import EditProfile from 'Containers/EditProfile'

const ColumnMenuLayout = ({ ...props }) => (
    <div className="grid-container container-column-menu">
        <div className="container-menu-elements">
            <div className="menu-link">
                <Link className="menu-link-selected" id="profile-link" onClick={() => {addColorSelectedMenuButton("profile-link")}} to={"/dashboard/profile/edit"}>Editar Pérfil</Link>
            </div>
            <div className="menu-link">
                <Link className="" id="password-link" onClick={() => {addColorSelectedMenuButton("password-link")}} to={"/dashboard/profile/password"}>Cambiar Contraseña</Link>
            </div>
        </div>
        <div className="container-menu-content">
            <Route path="/dashboard/profile/edit" render={() => <EditProfile {...props} />} />
            <Route path="/dashboard/profile/password" component={()=>(<p>password</p>)} />
        </div>
    </div>
)

function addColorSelectedMenuButton(selectedButtonId) {
    var profile = document.getElementById("profile-link")
    var password = document.getElementById("password-link")

    profile.className = ""
    password.className = ""

    var selectedButton = document.getElementById(selectedButtonId)
    selectedButton.className = "menu-link-selected"
}

export default ColumnMenuLayout