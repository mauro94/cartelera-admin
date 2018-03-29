import React from 'react'
import { confirmAlert } from 'react-confirm-alert'

export const ClosePublishModal = (props) => {
    this.setState({
        publishedStates: {
            options:  {'1': 'Pública', '0' : 'No pública'},
            selected: (props.event.published ? '1': '0')
        }
    })
}

export const OpenPublishModal = (option, props) => {
    let confirmationTitle = props.event.published ? 'Quitar de vista pública' : 'Confirmar publicación'
    let confirmationMsg = props.event.published ? 'El evento dejará de ser visible para el público general' : 'El evento será visible para el público general'
    let lastMsg = props.event.published ? 'quitar de vista pública' : 'confirmar publicación'

    // if key selected is not the one already selected
    if (props.publishedStates.selected != option) {
        // Push modal for confirmation
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='modal-confirmation'>
                  <h2> {confirmationTitle} </h2>
                  <h1> {props.event.name} </h1>
                  <p> {confirmationMsg} </p>
                  <p>Desea continuar?</p>
                  <div className='modal-confirmation-buttons'>
                    <button className='modal-cancel-button' onClick={() => {
                        //ClosePublishModal(props)
                        onClose()
                    }}>No, cancelar</button>
                    <button className='modal-confirm-button' onClick={() => {
                        (props.event.published ? props.unpublish() : props.publish())
                        onClose()
                    }}>Si, {lastMsg}</button>
                  </div>
                </div>
              )
            }
        })
    }
}

export const OpenCancelModal = (props) => {
    let confirmationTitle = 'Cancelar evento'
    let confirmationMsg = 'El público general verá el evento como cancelado y no se podrá revertir la cancelación'
    let lastMsg = 'cancelar evento'

    // Push modal for confirmation
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
            <div className='modal-confirmation'>
                <h2> {confirmationTitle} </h2>
                <h1> {props.event.name} </h1>
                <p> {confirmationMsg} </p>
                <p>Desea continuar?</p>
                <div className='modal-confirmation-buttons'>
                <button className='modal-confirm-button' onClick={() => {
                    onClose()
                }}>Salir sin cambios</button>
                <button className='modal-cancel-button' onClick={() => {
                    props.cancel() 
                    onClose()
                }}>Si, {lastMsg}</button>
                </div>
            </div>
            )
        }
    })
    
}