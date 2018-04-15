import React from 'react'
import { Callout, FeedbackModal } from 'Presentational/elements'
import { faListAlt } from '@fortawesome/fontawesome-free-regular'

export const AddCategory = (props) => (
    <Callout add={props.add} placeholder="Ejemplo: Deportes" icon={ faListAlt } />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={'Categoría agregada'}
        subtitle={props.category.name}
        handleOk={props.handleOk}>
    </FeedbackModal>
)

export const AddFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al agregar la categoría'}
        subtitle={props.category.name}
        handleOk={props.handleOk}>
        {props.error}
    </FeedbackModal>
)