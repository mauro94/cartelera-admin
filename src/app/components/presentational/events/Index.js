import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { history } from 'Config/helper'
import EditProfile from 'Containers/EditProfile'
import { CheckboxPublished, CheckboxCanceled } from 'Presentational/elements/Checkbox'
import Events from 'Containers/Events'

import 'Style/eventsMenuLayout.scss';

const EventsIndex = () => (
    <div className="grid-container container-events">
        <div className="events-title">
            <h1 id="event-title">Administrar Eventos</h1>
        </div>
        <div className="container-events-filter-1">
            <div className="filter-link filter-link-1" id="filter-link-1">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/upcoming"}>Próximos</NavLink>
            </div>
            <div className="filter-link filter-link-2" id="filter-link-2">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/past"}>Pasados</NavLink>
            </div>
        </div>
        <div className="container-events-all">
            <Route path="/dashboard/events/upcoming" render={() => <Events eventType="upcoming" />} />
            <Route path="/dashboard/events/past" render={() => <Events eventType="past" />} />
        </div>
    </div>
)

export default EventsIndex