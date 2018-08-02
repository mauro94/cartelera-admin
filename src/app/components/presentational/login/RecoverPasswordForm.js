
import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { LoginFormValidations, Entity, history } from 'Helpers/index'
import Yup from 'yup'
import {
    EmailField,
    PasswordField,
    SubmitButton,
    Button,
    FeedbackModal
} from 'Presentational/elements'
import { withFeedback } from 'Containers/hoc/index';

export const Recovery = (props) => (
        <div className='login-form-container'>
        <Formik
            validationSchema={
                Yup.object().shape({
                    email: LoginFormValidations.email
                })
            }
            initialValues={{ email: ''}}
            onSubmit={(values, action) => {
                props.handleSubmit(values)
                action.setSubmitting(false)
            }}>
            {(formProps) => (<RecoveryForm {...formProps} error={props.error} />)}
        </Formik>
        <Link to="/login">
            <div className="forgot-password">
                Iniciar sesión
            </div>
        </Link>
  </div>
)

const RecoveryForm = (props) => (
    <Form>
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <EmailField label='email' inputSizeSmall {...props}/>

        <SubmitButton {...props}>
            Recuperar contraseña
        </SubmitButton>
    </Form>
)

export const RecoverySucceeded = (props) => (
    <FeedbackModal
        title={'Contraseña recuperada'}
        subtitle={'Checa tu correo'}
        handleOk={() => {
            history.push('/login')
            props.onClose()
        }}>
    </FeedbackModal>
)

export const RecoveryFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al recuperar contraseña'}
        subtitle={'Intenta de nuevo'}
        handleOk={() => {
            history.push('/login')
            props.onClose()
        }}>
        {props.error}
    </FeedbackModal>
)


export default withFeedback(Recovery)
