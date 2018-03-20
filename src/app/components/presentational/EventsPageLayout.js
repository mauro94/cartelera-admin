import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { history } from 'Config/helper'
import EditProfile from 'Containers/EditProfile'
import {checkboxPublished, checkboxCanceled as CheckboxCanceled} from 'Presentational/EventsCheckbox'

import 'Style/eventsMenuLayout.scss';

const EventsPageLayout = () => (
    <div className="grid-container container-events">
        <div className="container-events-filter-1">
            <div className="filter-link filter-link-1">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/upcoming"}>Próximos</NavLink>
            </div>
            <div className="filter-link filter-link-2">
                <NavLink activeClassName="filter-selected" to={"/dashboard/events/past"}>Pasados</NavLink>
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

export default EventsPageLayout