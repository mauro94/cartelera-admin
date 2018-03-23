import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { history } from 'Config/helper'
import { Index as ProfileLayout } from 'Presentational/profile/Index'
import { Index as EventsLayout } from 'Presentational/events/Index'
import EventPage from 'Presentational/EventPage'
import { Index as SponsorsIndex } from 'Presentational/sponsors/Index'

import 'Style/gridMain.scss';
import 'Style/columnMenuLayout.scss';
import logo from 'Images/logo.svg';

const HomePage = ({ ...props }) => (
    <div className="grid-container container-home">
        <div className="container-navbar">
            <div className="container-navbar-logo">
                <div className="navbar-logo">
                    <Link to={"/dashboard/events/upcoming"}><img className="logo" src={logo} /></Link>
                </div>
                <div className="user">
                    {props.userType}
                </div>
            </div>
            <div className="container-navbar-buttons">
                {props.sponsorsButton && <props.sponsorsButton user={props.user} />}
                {props.categoriesButton && <props.categoriesButton user={props.user} />}
                {props.eventsButton && <props.eventsButton user={props.user} />}
                {props.profileButton && <props.profileButton user={props.user} logout={props.logout} />}
            </div>
        </div>
        <div className="container-content">
            <Route exact path="/" render={() => {
                history.replace('/dashboard/events/upcoming')
                return (
                    <EventsLayout />
                )
            }} />
            <Route exact path="/dashboard" render={() => {
                history.replace('/dashboard/events/upcoming')
                return (
                    <EventsLayout />
                )
            }} />
            <Route exact path="/dashboard/events" render={() => {
                history.replace('/dashboard/events/upcoming')
                return (
                    <EventsLayout />
                )
            }} />
            <Route path="/dashboard/events/upcoming" component={EventsLayout} />
            <Route path="/dashboard/events/past" component={EventsLayout} />
            <Route exact path="/dashboard/event/:id" component={EventPage} />
            <Route exact path="/dashboard/sponsors" component={SponsorsIndex} />
            <Route path="/dashboard/profile" render={() => <ProfileLayout {...props} />} />
        </div>
    </div>
)

export default HomePage