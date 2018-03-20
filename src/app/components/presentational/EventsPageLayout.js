import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { history } from 'Config/helper'
import EditProfile from 'Containers/EditProfile'
import {checkboxPublished, checkboxCanceled as CheckboxCanceled} from 'Presentational/EventsCheckbox'

import 'Style/eventsMenuLayout.scss';

const EventsPageLayout = () => (
    <div className="grid-container container-events">
        <div className="events-title">
            <h1 id="event-title">Eventos</h1>
        </div>
        <div className="container-events-filter-1">
            <div className="filter-link filter-link-1" id="filter-link-1">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/upcoming"} isActive={activateTabUpcoming}>Próximos</NavLink>
            </div>
            <div className="filter-link filter-link-2" id="filter-link-2">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/past"} isActive={activateTabPast}>Pasados</NavLink>
            </div>
        </div>
        <div className="container-events-filter-2">
            <Route exact path="/dashboard/events/upcoming" component={checkboxPublished} />
            <Route exact path="/dashboard/events/upcoming" render={() => <CheckboxCanceled checkboxClass={"filter-checkbox filter-link-2"}/>} />
            <Route exact path="/dashboard/events/past" render={() => <CheckboxCanceled checkboxClass={"filter-checkbox filter-link-1"}/>}/>
        </div>
        <div className="container-events-all">
            <p>EVENTOS</p>
        </div>
    </div>
)

const activateTabUpcoming = (match, location) => {
    if (document.getElementById("filter-link-1") == null) 
        return true
    if (location.pathname == "/dashboard/events/upcoming") {
        document.getElementById("event-title").innerHTML = "Eventos Próximos"
        return true
    }
    return false
}

const activateTabPast = (match, location) => {
    if (document.getElementById("filter-link-1") == null) 
        return true
    if (location.pathname == "/dashboard/events/past") {
        document.getElementById("event-title").innerHTML = "Eventos Cancelados"
        return true
    }
    return false
}


export default EventsPageLayout