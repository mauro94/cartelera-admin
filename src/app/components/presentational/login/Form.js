
import React from 'react'
import { Formik, Form } from 'formik'
import { LoginFormValidations, Entity } from 'Helpers/index'
import Yup from 'yup'
import {
    EmailField,
    PasswordField,
    SubmitButton
} from 'Presentational/elements'

export const BasicLogin = (props) => (
    <Formik
        validationSchema={
            Yup.object().shape({
                email: LoginFormValidations.email,
                password: LoginFormValidations.password
            })
        }
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, action) => {
            props.handleSubmit(values)
            action.setSubmitting(false)
        }}>
        {(formProps) => (<BasicForm {...formProps} error={props.error} />)}
    </Formik>
)

const BasicForm = (props) => (
    <Form >
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <EmailField label='email' inputSizeSmall {...props}/>

        <PasswordField label='password' inputSizeSmall {...props}/> 

        <SubmitButton {...props}>
            Iniciar Sesión
        </SubmitButton>
    </Form>
)
