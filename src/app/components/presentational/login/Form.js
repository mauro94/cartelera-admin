
import React from 'react'
import { Formik } from 'formik'
import { FormValidations } from 'Helpers/constants'
import {
    EmailComponent,
    PasswordComponent,
    FormComponent as Form
} from 'Presentational/elements'
import Yup from 'yup'

export const BasicLogin = (props) => (
    <Formik
        validationSchema={
            Yup.object().shape({
                email: FormValidations.email,
                password: FormValidations.password
            })
        }
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, action) => {
            props.handleSubmit(values)
            action.setSubmitting(false)
        }}>
        {props => (<BasicForm {...props} />)}
    </Formik>
)

const BasicForm = (props) => {
    let data = [
        { name: 'email', component: EmailComponent },
        { name: 'password', component: PasswordComponent }
    ]
    return (
        <Form
            {...props}
            data={data}
            submitTitle={'Iniciar Sesión'} />
    )
}