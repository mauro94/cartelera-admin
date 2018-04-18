import React from 'react'
import EditCategoryForm from 'Containers/categories/Edit'
import { Labels, Format, history } from 'Helpers/index'
import { FeedbackModal } from 'Presentational/elements'
import 'Style/categories/edit.scss'

export const EditSucceeded = (props) => (
    <FeedbackModal
        title={'¡Categoría editada!'}
        subtitle={props.category.name}
        handleOk={() => {
            props.onClose()
            history.push(`/categorias/${props.category.id}`)
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

const EditCategory = (props) => (
    <div className='edit-category'>
        <div className='label'>
            <div className='label-grid-item'>
                <div className='text'>
                    Nombre de la categoría
                </div>
            </div>
        </div>
        <input type="text" placeholder="Categoría" defaultValue={props.category.name} />
        <Actions category={props.category} />
    </div>
)

const Actions = (props) => (
    <div className='actions'>
        <button className='confirm-changes'>
            Actualizar
        </button>
    </div>
)

export default EditCategory