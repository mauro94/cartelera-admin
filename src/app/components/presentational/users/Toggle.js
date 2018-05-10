import React from 'react'
import { Button, FeedbackModal, ConfirmationModal } from 'Presentational/elements'
import { withFeedback } from 'Containers/hoc';
import { history } from 'Helpers/index'

export const ToggleUser = (props) => (
    <Button
        type={props.user.enabled ? 'secondary lg' : 'secondary lg'}
        handleClick={() => props.confirm(props.user)}>
        {props.user.enabled ? 'Bloquear' : 'Activar'}
    </Button>
)

export const ToggleConfirm = (props) => (
    <ConfirmationModal
        title={'Desea ' + (props.user.enabled ? 'bloquear' : 'activar') + ' al usuario?'}
        subtitle={props.user.email}
        confirmButtonType={props.user.enabled ? 'danger' : 'primary'}
        confirmationMsg={props.user.enabled ?
            'Una vez bloqueado, el usuario ya no podrá llevar a cabo sus funciones como ' + props.user.userType + '.' :
            'Una vez activado, el usuario podrá volver a llevar a cabo sus funciones como ' + props.user.userType + '.'}
        lastMsg={props.user.enabled ? 'bloquear' : 'activar'}
        handleCancel={props.onClose}
        handleConfirmCancel={() => {
            props.onClose()
            props.toggle(props.user)
        }}>
    </ConfirmationModal>
)

export const ToggleSucceeded = (props) => (
    <FeedbackModal
        title={'Usuario ' + (props.user.enabled ? 'activado' : 'bloqueado')}
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
        title={'Error al ' + (props.user.enabled ? 'activar' : 'bloquear') + ' al usuario'}
        subtitle={props.user.email}
        handleOk={props.onClose}>
    </FeedbackModal>
)

export default withFeedback(ToggleUser)