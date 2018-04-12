import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faBan, faUsers, faUserSecret } from '@fortawesome/fontawesome-free-solid'

export const EventsFormsActions = (props) => (
    <div className="event-actions-container">
        <a className="action-button-container">
            <button className="action-button">
                <FontAwesomeIcon icon={props.event.published ?  faUserSecret : faUsers}/>
            </button>
            <span>{props.event.published ? "Quitar de vista pública": "Publicar evento"}</span>
        </a>

        <a className="action-button-container">
            <button className="action-button">
                <FontAwesomeIcon icon={faEye}/>
            </button>
            <span>Vista previa</span>
        </a>

        <a className="action-button-container">
            <button className={props.event.cancelled ? "action-button disabled": "action-button warning" }>
                <FontAwesomeIcon icon={faBan}/>
            </button>
            <span className={props.event.cancelled ? "span-disabled": "span-warning"}>
                {props.event.cancelled ? "Evento cancelado": "Cancelar evento"}
            </span>
        </a>

    </div>        
)