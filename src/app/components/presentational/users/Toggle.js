import React from 'react'
import { Button, FeedbackModal, ConfirmationModal } from 'Presentational/elements'
import { withFeedback } from 'Containers/hoc';
import { history } from 'Helpers/index'

export const ToggleUser = (props) => (
    <Button
        type={props.user.enabled ? 'danger' : 'primary'}
        handleClick={() => props.confirm(props.user)}>
        {props.user.enabled ? 'Desactivar' : 'Activar'}
    </Button>
)

export const ToggleConfirm = (props) => (
    <ConfirmationModal
        title={'Desea ' + (props.user.enabled ? 'desactivar' : 'activar') + ' al usuario?'}
        subtitle={props.user.email}
        confirmationMsg={props.user.enabled ?
            'Una vez desactivado, el usuario ya no podrá llevar a cabo sus funciones como ' + props.user.userType + '.' :
            'Una vez activado, el usuario podrá volver a llevar a cabo sus funciones como ' + props.user.userType + '.'}
        lastMsg={props.user.enabled ? 'desactivar' : 'activar'}
        handleCancel={props.onClose}
        handleConfirmCancel={() => {
            props.onClose()
            props.toggle(props.user)
        }}>
    </ConfirmationModal>
)

export const ToggleSucceeded = (props) => (
    <FeedbackModal
        title={'Usuario ' + (props.user.enabled ? 'activado' : 'desactivado')}
        subtitle={props.user.email}
        handleOk={() => {
            props.onClose()
            history.push(`/usuarios/sponsors/${props.user.id}`)
        }}>
    </FeedbackModal>
)

export const ToggleFailed = (props) => (
    <FeedbackModal
        error={props.error}
        title={'Error al ' + (props.user.enabled ? 'activar' : 'desactivar') + ' al usuario'}
        subtitle={props.user.email}
        handleOk={props.onClose}>
    </FeedbackModal>
)

export default withFeedback(ToggleUser)