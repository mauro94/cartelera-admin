import React from 'react'
import { UserTypes, TemporaryPassword, Format } from 'Helpers/'
import { Callout, FeedbackModal } from 'Presentational/elements'
import 'Style/users/add.scss'

export const AddUser = (props) => (
    <Callout add={props.add} type={props.type} />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={Format.capitalize(UserTypes[props.type]) + ' agregado'}
        subtitle={props.user.email}
        handleOk={props.handleOk}>
        Contraseña temporal: <h1>{TemporaryPassword}</h1>
    </FeedbackModal>
)

export const AddFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al agregar al ' + UserTypes[props.type]}
        subtitle={props.user.email}
        handleOk={props.handleOk}>
        {props.error}
    </FeedbackModal>
)