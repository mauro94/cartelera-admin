import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { history } from 'Config/helper'
import ColumnMenuLayout from 'Presentational/ColumnMenuLayout'
import EventsPageLayout from 'Presentational/EventsPageLayout'
import EventPage from 'Presentational/EventPage'

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
                return(
                    <EventsPageLayout/>
                )
            }}/>
            <Route exact path="/dashboard" render={() => {
                history.replace('/dashboard/events/upcoming')
                return(
                    <EventsPageLayout/>
                )
            }}/>
            <Route exact path="/dashboard/events" render={() => {
                history.replace('/dashboard/events/upcoming')
                return(
                    <EventsPageLayout/>
                )
            }}/>
            <Route path="/dashboard/events/upcoming" component={EventsPageLayout} />
            <Route path="/dashboard/events/past" component={EventsPageLayout} />
            <Route exact path="/dashboard/event/:id" component={EventPage} />
            <Route path="/dashboard/profile" render={() => <ColumnMenuLayout {...props} />}/>
        </div>
    </div>
)

export default HomePage