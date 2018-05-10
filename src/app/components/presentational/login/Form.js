
import React from 'react'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import { LoginFormValidations, Entity } from 'Helpers/index'
import Yup from 'yup'
import {
    EmailField,
    PasswordField,
    SubmitButton,
    Button
} from 'Presentational/elements'

export const BasicLogin = (props) => (
        <div className='login-form-container'>
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
        <Link to="/login/recuperar">
            <div className="forgot-password">
                Olvidé mi contraseña
            </div>
        </Link>
  </div>
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
