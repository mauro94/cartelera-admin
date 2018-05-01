import React from 'react'
import { ConfirmationModal, FeedbackModal } from 'Presentational/elements'

export const ConfirmUpdate = (props) => (
    <ConfirmationModal
        title={'Editar evento'}
        subtitle={props.event.name}
        confirmationMsg={'La información del evento se va a modificar'}
        lastMsg={'confirmar actualización'}
        buttonClass={'modal-confirm-button'}
        handleConfirmCancel={() => {
            props.handleConfirm()
            props.onClose()
        }}
        handleCancel={() => {
            props.onClose()
        }}>
    </ConfirmationModal>
)

export const ConfirmUserUpdate = (props) => (
    <ConfirmationModal
        title={'Editar perfil'}
        confirmationMsg={'La información de tu perfil se va a modificar'}
        lastMsg={'confirmar actualización'}
        buttonClass={'modal-confirm-button'}
        handleConfirmCancel={() => {
            props.handleConfirm()
            props.onClose()
        }}
        handleCancel={() => {
            props.onClose()
        }}>
    </ConfirmationModal>
)

export const ConfirmPasswordUpdate = (props) => (
    <ConfirmationModal
        title={'Cambiar contraseña'}
        confirmationMsg={'Tu contraseña será modificada, no se te olvide'}
        lastMsg={'cambiar contraseña'}
        buttonClass={'modal-confirm-button'}
        handleConfirmCancel={() => {
            props.handleConfirm()
            props.onClose()
        }}
        handleCancel={() => {
            props.onClose()
        }}>
    </ConfirmationModal>
)

export const ConfirmCreate = (props) => (
    <ConfirmationModal
        title={'Crear evento'}
        subtitle={props.event.name}
        confirmationMsg={'El evento será creado y publicado en la cartelera'}
        lastMsg={'crear evento'}
        buttonClass={'modal-confirm-button'}
        handleConfirmCancel={() => {
            props.handleConfirm()
            props.onClose()
        }}
        handleCancel={() => {
            props.onClose()
        }}>
    </ConfirmationModal>
)

export const ConfirmPublish = (props) => (
    <ConfirmationModal
        error
        title={'Confirmar publicación'}
        subtitle={props.event.name}
        confirmationMsg={'El evento será visible para el público general'}
        lastMsg={'confirmar publicación'}
        buttonClass={'modal-confirm-button'}
        handleConfirmCancel={() => {
            props.togglePublished()
            props.onClose()
        }}
        handleCancel={() => {
            props.onClose()
        }}>
        {props.error}
    </ConfirmationModal>
)

export const ConfirmUnpublish = (props) => (
    <ConfirmationModal
        error
        title={'Quitar de vista pública'}
        subtitle={props.event.name}
        confirmationMsg={'El evento dejará de ser visible para el público general'}
        lastMsg={'quitar de vista pública'}
        buttonClass={'modal-confirm-button'}
        handleConfirmCancel={() => {
            props.togglePublished()
            props.onClose()
        }}
        handleCancel={() => {
            props.onClose()
        }}>
        {props.error}
    </ConfirmationModal>
)

export const FeedbackCancelled = (props) => (
    <FeedbackModal
        title={'Evento cancelado'}
        subtitle={props.event.name}
        handleOk={props.onClose}>
        <div>
            <textarea name='paragraph_text'
                cols='20'
                rows='3'
                value={props.event.cancelMessage} readOnly>
            </textarea>
        </div>
    </FeedbackModal>
)

export class ConfirmCancel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cancelMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            cancelMessage: ''
        })
    }

    handleChange(e) {
        this.setState({
            cancelMessage: e.target.value
        })
    }

    render() {
        return (
            <ConfirmationModal
                error
                title={'Cancelar evento'}
                subtitle={this.props.event.name}
                confirmButtonType='danger'
                confirmationMsg={'El público general verá el evento como cancelado y no se podrá revertir la cancelación.'}
                lastMsg={'cancelar evento'}
                buttonClass={'modal-confirm-cancel-button'}
                handleConfirmCancel={(cancelMessage) => {
                    this.props.handleConfirmCancel(this.state.cancelMessage)
                    this.props.onClose()
                }}
                handleCancel={() => {
                    this.props.onClose()
                }}>
                <textarea name='paragraph_text'
                    cols='20'
                    rows='3'
                    placeholder='Mensaje de cancelación para el público (opcional)'
                    value={this.state.cancelMessage}
                    onChange={this.handleChange}>
                </textarea>
                {this.props.error}
            </ConfirmationModal>
        )
    }
}