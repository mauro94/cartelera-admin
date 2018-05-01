import React from 'react'
import EditUserForm from 'Containers/users/Edit'
import { Labels, Format, history } from 'Helpers/index'
import { FeedbackModal, UserAvatar } from 'Presentational/elements'
import {  Tag } from 'Presentational/elements'
import BasicForm from 'Presentational/users/forms/Basic'

export const EditSucceeded = (props) => (
    <FeedbackModal
        title={'¡Usuario editado!'}
        subtitle={props.user.email}
        handleOk={() => {
            props.onClose()
            history.push(`/usuarios/${props.type}/${props.user.id}`)
        }}>
    </FeedbackModal>
)

export const EditFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al editar al usuario'}
        subtitle={props.user}
        handleOk={props.onClose}>
        {props.error}
    </FeedbackModal>
)

const EditUser = (props) => {
    let selectedItem = document.getElementById(`list-item-${props.user.id}`)
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    return <div className='expanded-selection'>
        <Title user={props.user} />
        <EditUserForm
            type={props.type}
            userToUpdate={props.user}>
            <BasicForm />
        </EditUserForm>
    </div>
}


const getUserTitle = (user) => {
    return user.firstName ?
        `${user.firstName} ${user.lastName}`
        : user.email
}

const Title = (props) => {
    return <div className='title'>
        <UserAvatar user={props.user} size={100} />
        <div className='name'>
            <p>{getUserTitle(props.user)}</p>
        </div>
        <div className='title-tag green'>
            {props.user.isNewbie && <Tag>Nuevo</Tag>}
        </div>
    </div>
}


const FormLabels = ({ array }) => (
    array.map((label, index) => (
        <div key={`Label-${index}`} className='label-grid-item'>
            <div className='text'>
                {Format.capitalize(Labels[label])}
            </div>
        </div>
    ))
)

export default EditUser