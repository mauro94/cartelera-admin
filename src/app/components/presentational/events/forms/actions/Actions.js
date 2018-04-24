import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faBan, faUsers, faLock } from '@fortawesome/fontawesome-free-solid'
import { ConfirmPublish, ConfirmUnpublish, ConfirmCancel, FeedbackCancelled } from 'Presentational/events/Edit'
import { ModalAlert, Button } from 'Presentational/elements/index';

export const EventsFormsActions = (props) => (
    <div className="event-actions-container">
        <a className="action-button-container">
            <Button
                className="action-button"
                handleClick={() =>
                    ModalAlert({
                        modal: props.event.published ? ConfirmUnpublish : ConfirmPublish,
                        event: props.event,
                        togglePublished: props.togglePublished,
                        error: props.event.error
                    })
                }>
                <FontAwesomeIcon icon={props.event.published ? faLock : faUsers} />
            </Button>
            <span>{props.event.published ? "Quitar de vista pública" : "Publicar evento"}</span>
        </a>

        <a className="action-button-container">
            <Button
                type='danger'
                className={"action-button warning"}
                handleClick={() =>
                    ModalAlert({
                        modal: props.event.cancelled ? FeedbackCancelled : ConfirmCancel,
                        event: props.event,
                        handleConfirmCancel: props.handleConfirmCancel,
                        error: props.event.error
                    })
                }>
                <FontAwesomeIcon icon={faBan} />
            </Button>
            <span className={"span-warning"}>
                {props.event.cancelled ? "Evento cancelado" : "Cancelar evento"}
            </span>
        </a>

    </div>
)
