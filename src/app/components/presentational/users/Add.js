import React from 'react'
import { UserTypes, TemporaryPassword, Format, history } from 'Helpers/index'
import { Callout, FeedbackModal } from 'Presentational/elements'
import 'Style/users/add.scss'
import { withFeedback } from 'Containers/hoc';

const AddUser = (props) => (
    <Callout add={props.add} type={props.type} />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={Format.capitalize(UserTypes[props.type]) + ' agregado'}
        subtitle={props.user.email}
        handleOk={() => {
            props.onClose()
            history.push(`/usuarios/${props.type}s/${props.user.id}`)
        }}>
        Contraseña temporal: <h1>{TemporaryPassword}</h1>
    </FeedbackModal>
)

export const AddFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al agregar al ' + UserTypes[props.type]}
        subtitle={props.user}
        handleOk={props.onClose}>
        {props.error}
    </FeedbackModal>
)

export default withFeedback(AddUser)