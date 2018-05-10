import React from 'react'
import { history } from 'Helpers/index'
import { Callout, FeedbackModal } from 'Presentational/elements'
import { faListAlt } from '@fortawesome/fontawesome-free-regular'
import { withFeedback } from 'Containers/hoc'
import 'Style/common/simpleAdd.scss'

export const AddCategory = (props) => (
    <Callout add={props.add} placeholder="Ejemplo: Deportes" type={"Categoría"} icon={faListAlt} />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={'Categoría agregada'}
        subtitle={props.category.name}
        handleOk={() => {
            props.onClose()
            history.push(`/categorias/${props.category.id}`)
        }}>
    </FeedbackModal>
)

export const AddFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al agregar la categoría'}
        subtitle={props.category}
        handleOk={props.onClose}>
        {props.error.name[0]}
    </FeedbackModal>
)

export default withFeedback(AddCategory)