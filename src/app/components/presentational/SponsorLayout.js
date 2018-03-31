import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { history } from 'Config/helper'
import ProfileIndex from 'Presentational/profile/Index'
import EventsIndex from 'Presentational/events/Index'
import EventDetail from 'Containers/EventDetail'

import 'Style/gridMain.scss';
import 'Style/columnMenuLayout.scss';
import logo from 'Images/logo.svg';

const SponsorLayout = ({ ...props }) => (
    <div className="grid-container container-home">
        <div className="container-navbar">
            <div className="container-navbar-logo">
                <div className="navbar-logo">
                    <Link to={"/dashboard/events/upcoming"}><img className="logo" src={logo} /></Link>
                </div>
                <div className="user">Sponsor</div>
            </div>
            <div className="container-navbar-buttons">
                <NavLink className="navbar-button" activeClassName="selected-button-view" id="events-button" to={"/dashboard/events/upcoming"} isActive={events}>Eventos</NavLink>
                <div className="dropdown">
                    <NavLink className="navbar-button" activeClassName="selected-button-view" id="user-button" to={"/dashboard/profile/edit"} isActive={editProfile}>{ props.user.firstName }</NavLink>
                    <div className="dropdown-content">
                        <Link to={"/dashboard/profile/edit"}>Pérfil</Link>
                        <Link to={"/login"} onClick={() => { props.logout() }}>Cerrar Sesión</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-content">
            <Route exact path="/" render={() => {
                history.replace('/dashboard/events/upcoming')
                return (
                    <EventsIndex />
                )
            }} />
            <Route exact path="/dashboard" render={() => {
                history.replace('/dashboard/events/upcoming')
                return (
                    <EventsIndex />
                )
            }} />
            <Route exact path="/dashboard/events" render={() => {
                history.replace('/dashboard/events/upcoming')
                return (
                    <EventsIndex />
                )
            }} />
            <Route path="/dashboard/events/upcoming" component={EventsIndex} />
            <Route path="/dashboard/events/past" component={EventsIndex} />
            <Route path="/dashboard/event/:id" render={({ match }) => <EventDetail id={match.params.id} />}/>
            <Route path="/dashboard/profile" render={() => <ProfileIndex {...props} />} />
        </div>
    </div>
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
    if (location.pathname.includes("events"))
        return true
    if (location.pathname.includes("event"))
        return true
    return false
}

export default SponsorLayout