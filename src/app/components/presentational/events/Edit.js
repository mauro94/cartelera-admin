import React from 'react'
import Dropdown from 'Presentational/elements/Dropdown'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import {
    ClosePublishModal,
    OpenPublishModal,
    OpenCancelModal
} from 'Presentational/elements/Modal'
import { history } from 'Config/helper'
import EditEvent from "Containers/EditEvent"

import 'react-confirm-alert/src/react-confirm-alert.css'
import 'Style/eventDetail.scss';

const EventsEdit = ({...props}) => (
    <React.Fragment>
        <div className="event-title-container">
            <h1> {props.event.name}</h1>
        </div>
        <div className="event-details-container">
            <div className="event-options-container">
                <br></br>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/"+props.event.id+"/general"}>General</NavLink>
                </div>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/"+props.event.id+"/images"}>Imágenes</NavLink>
                </div>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/"+props.event.id+"/details"}>Detalle</NavLink>
                </div>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/"+props.event.id+"/optional"}>Opcional</NavLink>
                </div>
            </div>
            <div className="event-data-container">
                <Route path={"/dashboard/event/"+props.event.id+"/general"} render={() => <EditEvent {...props} />} />
                <Route path={"/dashboard/event/"+props.event.id+"/details"} render={() => <EditEvent {...props} />} />
            </div>
        </div>        
    </React.Fragment>
)

export default EventsEdit