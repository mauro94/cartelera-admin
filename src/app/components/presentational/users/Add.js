import React from 'react'
import { UserTypes, TemporaryPassword, Format } from 'Helpers/'
import { Callout, FeedbackModal } from 'Presentational/elements'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'


export const AddUser = (props) => (
    <Callout add={props.add} placeholder="example@example.com" type={props.type} icon={ faEnvelope } />
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