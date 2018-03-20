import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { history } from 'Config/helper'
import EditProfile from 'Containers/EditProfile'
import {checkboxPublished, checkboxCanceled as CheckboxCanceled} from 'Presentational/EventsCheckbox'

import 'Style/eventsMenuLayout.scss';

const EventsPageLayout = () => (
    <div className="grid-container container-events">
        <div className="events-title">
            <h1>Eventos</h1>
        </div>
        <div className="container-events-filter-1">
            <div className="filter-link filter-link-1 filter-link-selected" id="filter-link-1">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/upcoming"} isActive={activateTab}>Próximos</NavLink>
            </div>
            <div className="filter-link filter-link-2" id="filter-link-2">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/past"} isActive={activateTab}>Pasados</NavLink>
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

const activateTab = (match, location) => {
    if (document.getElementById("filter-link-1") == null) 
        return true
    if (location.pathname == "/dashboard/events/upcoming") {
        document.getElementById("filter-link-1").className = "filter-link filter-link-1 filter-link-selected"
        document.getElementById("filter-link-2").className = "filter-link filter-link-2"
        return true
    }
    document.getElementById("filter-link-1").className = "filter-link filter-link-1"
    document.getElementById("filter-link-2").className = "filter-link filter-link-2 filter-link-selected"
    return false
}


export default EventsPageLayout