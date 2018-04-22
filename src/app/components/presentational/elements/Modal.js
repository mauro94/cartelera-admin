import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export const Alert = (props) => {
    let { modal, ...childProps } = props;
    confirmAlert({
        customUI: ({ onClose }) =>
            <props.modal {...childProps} onClose={onClose} />
    })
}

export const Confirmation = (props) => (
    <div className='modal-confirmation'>
        <h2>{props.title}</h2>
        <h1>{props.subtitle}</h1>
        <p>{props.confirmationMsg}</p>
        <p>¿Desea continuar?</p>
        {props.children}
        <div className='modal-confirmation-buttons'>
            <button
                className='modal-cancel-button'
                onClick={() => props.handleCancel()}>
                Salir sin cambios
            </button>
            <button
                className={props.buttonClass}
                onClick={(e) => props.handleConfirmCancel(e)}>
                Si, {props.lastMsg}
            </button>
        </div>
    </div>
)

export const Feedback = (props) => (
    <div className={'modal-confirmation' + (props.error ? ' error' : '')}>
        <h2>{props.title}</h2>
        <h1>{props.subtitle}</h1>
        {props.children}
        <div className='modal-confirmation-buttons'>
            <button
                className='modal-ok-button'
                onClick={() => props.handleOk()}>
                OK
            </button>
        </div>
    </div>
)
