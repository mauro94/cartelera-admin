import React from 'react'
import { FeedbackModal } from 'Presentational/elements'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'
import { withFeedback } from 'Containers/hoc';

export const RemoveCategory = (props) => (
    <button className='remove' onClick={() => props.remove(props.category)}>
        <FontAwesomeIcon icon={faTrashAlt} /> Borrar
    </button>
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