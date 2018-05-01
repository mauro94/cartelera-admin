import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faBan, faUsers, faLock } from '@fortawesome/fontawesome-free-solid'
import { ConfirmPublish, ConfirmUnpublish, ConfirmCancel, FeedbackCancelled } from 'Presentational/events/modals'
import { ModalAlert, Button } from 'Presentational/elements/index'
import { history } from 'Helpers/index'

const Action = (props) => {
    let { children, label, type, ...modalProps } = props
    return (
        <a className='action-button-container'>
            <Button
                type={type}
                className='action-button'
                handleClick={() => ModalAlert(modalProps)}>
                {children}
            </Button>
            <span>{label}</span>
        </a>
    )
}

export const EventFormsActions = (props) => (
    <div className='actions-container'>
        <Action
            type='icon-button primary'
            label={props.event.published ?
                'Quitar de vista pública' :
                'Publicar evento'}
            modal={props.event.published ? ConfirmUnpublish : ConfirmPublish}
            event={props.event}
            togglePublished={props.togglePublished}>
            <FontAwesomeIcon icon={props.event.published ? faLock : faUsers} />
        </Action>

        <Action
            type='icon-button danger'
            label={props.event.cancelled ? 'Evento cancelado' : 'Cancelar evento'}
            modal={props.event.cancelled ? FeedbackCancelled : ConfirmCancel}
            event={props.event}
            handleConfirmCancel={props.handleConfirmCancel}>
            <FontAwesomeIcon icon={faBan} />
        </Action>
    </div>
)