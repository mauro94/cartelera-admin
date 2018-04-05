import React from 'react'

export const Confirmation = (props) => (
    <div className='modal-confirmation'>
        <h2>{props.title}</h2>
        <h1>{props.subtitle}</h1>
        <p>{props.confirmationMsg}</p>
        <p>Desea continuar?</p>
        <div className='modal-confirmation-buttons'>
            <button
                className='modal-cancel-button'
                onClick={() => props.handleCancel()}>
                No, cancelar
            </button>
            <button
                className='modal-confirm-button'
                onClick={() => props.handleConfirm()}>
                Si, {props.lastMsg}
            </button>
        </div>
    </div >
)

export const Feedback = (props) => (
    <div className={'modal-confirmation' + (props.error ? ' error' : '')}>
        <h2>{props.title}</h2>
        <h1>{props.subtitle}</h1>
        <p>{props.children}</p>
        <div className='modal-confirmation-buttons'>
            <button
                className='modal-ok-button'
                onClick={() => props.handleOk()}>
                OK
            </button>
        </div>
    </div>
)