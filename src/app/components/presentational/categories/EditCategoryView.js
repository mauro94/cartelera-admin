import React from 'react'
import EditCategoryForm from 'Containers/categories/Edit'
import { history } from 'Helpers/index'
import { FeedbackModal } from 'Presentational/elements'
import BasicForm from 'Presentational/categories/forms/Basic'
import { CategoryAvatar } from 'Presentational/elements'

export const EditSucceeded = (props) => (
    <FeedbackModal
        title={'¡Categoría editada!'}
        subtitle={props.category.name}
        children={props.category.totalCount + (props.category.totalCount == 1 ? ' evento ha sido modificado.' : ' eventos han sido modificados.')}
        handleOk={() => {
            props.onClose()
            history.push(`/categorias/${props.category.id}`)
        }}>
    </FeedbackModal>
)

export const EditFailed = (props) => (
    <FeedbackModal
        error={props.error}
        title={'Error al editar la categoría'}
        subtitle={props.category.name}
        handleOk={() => {
            props.onClose()
            history.push(`/categorias/${props.category.id}`)
        }}>
    </FeedbackModal>
)

const EditCategory = (props) => (
    <div className='expanded-selection'>
        <Title category={props.category} />
        <EditCategoryForm
            categoryToUpdate={props.category}>
            <BasicForm />
        </EditCategoryForm>
    </div>
)

const Title = (props) => (
    <div className='title'>
        <CategoryAvatar category={props.category} size={100} />
        <div className='name'>
            {props.category.name}
        </div>
    </div>
)

export default EditCategory