import React from 'react'
import { Button, FeedbackModal, ConfirmationModal } from 'Presentational/elements'
import { withFeedback } from 'Containers/hoc';
import { history } from 'Helpers/index'

export const ToggleCategory = (props) => (
    <Button
        type={props.category.enabled ? 'secondary lg' : 'secondary lg'}
        handleClick={() => props.confirm(props.category)}>
        {props.category.enabled ? 'Desactivar' : 'Activar'}
    </Button>
)

export const ToggleConfirm = (props) => (
    <ConfirmationModal
        title={'Desea ' + (props.category.enabled ? 'desactivar' : 'activar') + ' la categoría?'}
        subtitle={props.category.name}
        confirmButtonType={props.category.enabled ? 'danger' : 'primary'}
        confirmationMsg={props.category.enabled ?
            'Una vez desactivada, ya no se podrá utilizar esta categoría en los eventos hasta que se reactive.' :
            'Una vez activada, se podrá utilizar esta categoría en los eventos.'}
        lastMsg={props.category.enabled ? 'desactivar' : 'activar'}
        handleCancel={props.onClose}
        handleConfirmCancel={() => {
            props.onClose()
            props.toggle(props.category)
        }}>
    </ConfirmationModal>
)

export const ToggleSucceeded = (props) => (
    <FeedbackModal
        title={'Categoría ' + (props.category.enabled ? 'activada' : 'desactivada')}
        subtitle={props.category.name}
        handleOk={() => {
            props.onClose()
            history.push(`/categorias/${props.category.id}`)
        }}>
    </FeedbackModal>
)

export const ToggleFailed = (props) => (
    <FeedbackModal
        error={props.error}
        title={'Error al ' + (props.category.enabled ? 'activar' : 'desactivar') + ' la categoría'}
        subtitle={props.category.name}
        handleOk={props.onClose}>
    </FeedbackModal>
)

export default withFeedback(ToggleCategory)