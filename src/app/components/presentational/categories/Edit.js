import React from 'react'
import { Labels, Format, history } from 'Helpers/index'
import { FeedbackModal } from 'Presentational/elements'
import 'Style/categories/edit.scss'

export const EditSucceeded = (props) => (
    <FeedbackModal
        title={'¡Categoría editada!'}
        subtitle={props.category.name}
        handleOk={() => {
            props.onClose()
        }}>
    </FeedbackModal>
)

export const EditFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al editar la categoría'}
        subtitle={props.category}
        handleOk={props.onClose}>
        {props.error}
    </FeedbackModal>
)

export const EditCategory = (props) => (
    <div className='edit'>
    </div>
)

export default EditCategory