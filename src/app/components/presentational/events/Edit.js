import React from 'react'
import Dropdown from 'Presentational/elements/Dropdown'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publishedStates: {
                options:  {'1': 'Pública', '0' : 'No pública'},
                selected: (props.event.published ? '1': '0')
            }
        }
        this.openPublishModal = this.openPublishModal.bind(this)
        this.closePublishModal = this.closePublishModal.bind(this)
        this.openCancelModal = this.openCancelModal.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            publishedStates: {
                options:  {'1': 'Pública', '0' : 'No pública'},
                selected: (nextProps.event.published ? '1': '0')
            }
        })
    }

    closePublishModal(){
        this.setState({
            publishedStates: {
                options:  {'1': 'Pública', '0' : 'No pública'},
                selected: (this.props.event.published ? '1': '0')
            }
        })
    }

    openPublishModal(option) {
        let confirmationTitle = this.props.event.published ? 'Quitar de vista pública' : 'Confirmar publicación'
        let confirmationMsg = this.props.event.published ? 'El evento dejará de ser visible para el público general' : 'El evento será visible para el público general'
        let lastMsg = this.props.event.published ? 'quitar de vista pública' : 'confirmar publicación'

        // if key selected is not the one already selected
        if (this.state.publishedStates.selected != option) {
            // Push modal for confirmation
            confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='modal-confirmation'>
                      <h2> {confirmationTitle} </h2>
                      <h1> {this.props.event.name} </h1>
                      <p> {confirmationMsg} </p>
                      <p>Desea continuar?</p>
                      <div className='modal-confirmation-buttons'>
                        <button className='modal-cancel-button' onClick={() => {
                            this.closePublishModal()
                            onClose()
                        }}>No, cancelar</button>
                        <button className='modal-confirm-button' onClick={() => {
                            (this.props.event.published ? this.props.unpublish() : this.props.publish())
                            onClose()
                        }}>Si, {lastMsg}</button>
                      </div>
                    </div>
                  )
                }
            })
        }
    }

    openCancelModal() {
        let confirmationTitle = 'Cancelar evento'
        let confirmationMsg = 'El público general verá el evento como cancelado y no se podrá revertir la cancelación'
        let lastMsg = 'cancelar evento'

        // Push modal for confirmation
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                <div className='modal-confirmation'>
                    <h2> {confirmationTitle} </h2>
                    <h1> {this.props.event.name} </h1>
                    <p> {confirmationMsg} </p>
                    <p>Desea continuar?</p>
                    <div className='modal-confirmation-buttons'>
                    <button className='modal-confirm-button' onClick={() => {
                        onClose()
                    }}>Salir sin cambios</button>
                    <button className='modal-cancel-button' onClick={() => {
                        this.props.cancel() 
                        onClose()
                    }}>Si, {lastMsg}</button>
                    </div>
                </div>
                )
            }
        })
        
    }

    render(){
        return (
            <React.Fragment>
                <h1> {this.props.event.name}</h1>
                <hr/>
                <div className='modifyButtons'>
                    <span className='label'>Visible en la vista </span>
                    <span> <Dropdown data={this.state.publishedStates} handleSelect={this.openPublishModal}/> </span>
                </div>
                <div>
                    <button className='cancel-event-button'
                    onClick={this.openCancelModal}
                    disabled={this.props.event.cancelled}> {this.props.event.cancelled ? 'Evento cancelado' : 'Cancelar evento'} </button>
                </div>
                
            </React.Fragment>
        )
    }
}