import React from 'react'
import Dropdown from 'Presentational/elements/Dropdown'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid'
import { NavLink } from "react-router-dom"
import {
    ClosePublishModal,
    OpenPublishModal,
    OpenCancelModal
} from 'Presentational/elements/Modal'

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
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/"+props.event.id}>General</NavLink>
                </div>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/:id/images"}>Imágenes</NavLink>
                </div>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/:id/details"}>Detalle</NavLink>
                </div>
                <div className="menu-link ">
                    <NavLink activeClassName="menu-link-selected" to={"/dashboard/event/:id/optional"}>Opcional</NavLink>
                </div>
            </div>
            <div className="event-data-container">

            </div>
            <div className="event-actions-container">
            </div>
        </div>



        {/* <div className='modifyButtons'>
            <span className='label'>Visible en la vista </span>
            <span> <Dropdown data={props.publishedStates} handleSelect={OpenPublishModal} {...props}/> </span>
        </div>
        <div>
            <button className='cancel-event-button'
            onClick={() => OpenCancelModal(props)}
            disabled={props.event.cancelled}> {props.event.cancelled ? 'Evento cancelado' : 'Cancelar evento'} </button>
        </div> */}
        
    </React.Fragment>
)

export default EventsEdit