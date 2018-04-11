import React from 'react'
import EditUserForm from 'Containers/users/Edit'
import { Labels, Format, history } from 'Helpers/index'
import { FeedbackModal, UserAvatar } from 'Presentational/elements'
import BasicForm from 'Presentational/users/forms/Basic'
import 'Style/users/edit.scss'

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

const EditUser = (props) => (
    <div className='edit'>
        <UserAvatar user={props.user} size={100} />
        <div className='label'>
            <FormLabels array={['firstName',
                'lastName', 'office', 'phoneNumber', 'campus']} />
            <div className='pointer'></div>
        </div>
        <EditUserForm
            type={props.type}
            userToUpdate={props.user}>
            <BasicForm />
        </EditUserForm>
    </div>
)

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