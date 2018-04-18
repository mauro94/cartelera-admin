import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faBan, faUsers, faLock } from '@fortawesome/fontawesome-free-solid'
import { ConfirmPublish, ConfirmUnpublish, ConfirmCancel, FeedbackCancelled } from 'Presentational/events/Edit'
import { ModalAlert} from 'Presentational/elements/index';

export const EventsFormsActions = (props) => (
    <div className="event-actions-container">
        <a className="action-button-container">
            <button 
                className="action-button"
                onClick={() =>
                    ModalAlert({
                        modal: props.event.published ? ConfirmUnpublish : ConfirmPublish,
                        event: props.event,
                        togglePublished: props.togglePublished,
                        error: props.event.error
                    })
                }>
                <FontAwesomeIcon icon={props.event.published ?  faLock : faUsers}/>
            </button>
            <span>{props.event.published ? "Quitar de vista pública": "Publicar evento"}</span>
        </a>

        <a className="action-button-container">
            <button
                className={"action-button warning"}
                onClick={() =>
                    ModalAlert({
                        modal: props.event.cancelled ? FeedbackCancelled : ConfirmCancel,
                        event: props.event,
                        handleConfirmCancel: props.handleConfirmCancel,
                        error: props.event.error
                    })
                }>
                <FontAwesomeIcon icon={faBan}/>
            </button>
            <span className={"span-warning"}>
                {props.event.cancelled ? "Evento cancelado": "Cancelar evento"}
            </span>
        </a>

    </div>        
)
