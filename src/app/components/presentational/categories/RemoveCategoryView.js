import React from 'react'
import { Button, FeedbackModal, ConfirmationModal } from 'Presentational/elements'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'
import { withFeedback } from 'Containers/hoc';

export const RemoveCategory = (props) => (
    <Button
        type='dark lg'
        handleClick={() => {
            props.confirm(props.category)
        }}>
        <FontAwesomeIcon icon={faTrashAlt} /> Borrar
    </Button>
)

export const RemoveConfirm = (props) => (
    <ConfirmationModal
        title={'Desea eliminar la categoría?'}
        subtitle={props.category.name}
        confirmButtonType='danger'
        confirmationMsg={'Una vez eliminada, ya no se podrá recuperar.'}
        lastMsg={'continuar'}
        handleCancel={props.onClose}
        handleConfirmCancel={() => {
            props.onClose()
            props.remove(props.category)
        }}>
    </ConfirmationModal>
)

export const RemoveSucceeded = (props) => (
    <FeedbackModal
        title={'Categoría eliminada'}
        subtitle={props.category.name}
        handleOk={() => {
            props.onClose()
            window.location.replace('/categorias')
        }}>
    </FeedbackModal>
)

export const RemoveFailed = (props) => (
    <FeedbackModal
        error={props.error}
        title={'Error al eliminar la categoría'}
        subtitle={props.category.name}
        handleOk={props.onClose}>
    </FeedbackModal>
)

export default withFeedback(RemoveCategory)