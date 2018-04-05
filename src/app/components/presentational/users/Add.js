import React from 'react'
import { UserTypes, TemporaryPassword } from 'Global/constants'
import { Callout, FeedbackModal } from 'Presentational/elements'

export const AddUser = (props) => (
    <Callout add={props.add} type={props.type} />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={UserTypes[props.type].initialToUpper() + ' agregado'}
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