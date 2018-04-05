import React from 'react'
import { Callout, FeedbackModal } from 'Presentational/elements'
import { UserTypes, TemporaryPassword } from 'Config/constants'
import { capitalizeFirstLetter } from 'Config/helper'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

export const AddUser = (props) => (
    <Callout add={props.add} placeholder="example@example.com" type={props.type} icon={ faEnvelope } />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={capitalizeFirstLetter(UserTypes[props.type]) + ' agregado'}
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