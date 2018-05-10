import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Button  } from './Button'
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
            <Button
                type='secondary'
                handleClick={() => props.handleCancel()}>
                {'Salir sin cambios'}
            </Button>
            <Button
                type={props.confirmButtonType ? props.confirmButtonType : 'primary'}
                handleClick={(e) => props.handleConfirmCancel(e)}>
                Si, {props.lastMsg}
            </Button>
        </div>
    </div>
)

export const Feedback = (props) => (
    <div className={'modal-confirmation' + (props.error ? ' error' : '')}>
        <h2>{props.title}</h2>
        <h1>{props.subtitle}</h1>
        {props.children}
        <div className='modal-confirmation-buttons'>
            <Button
                handleClick={() => props.handleOk()}>
                OK
            </Button>
        </div>
    </div>
)
