import React from 'react'
import { FeedbackModal, ConfirmationModal } from 'Presentational/elements'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'
import { withFeedback } from 'Containers/hoc';

export const RemoveCategory = (props) => (
    <button className='remove' onClick={() => props.confirm(props.category)}>
        <FontAwesomeIcon icon={faTrashAlt} /> Borrar
    </button>
)

export const RemoveConfirm = (props) => (
    <ConfirmationModal
        title={'Desea eliminar la categoría?'}
        subtitle={props.category.name}
        confirmationMsg={'Una vez eliminada, ya no se podrá recuperar.'}
        lastMsg={'continuar'}
        onClose={props.onClose}
        handleConfirm={() => props.remove(props.category)}>
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