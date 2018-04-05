import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'
import { PasswordComponent, FormComponent as Form } from 'Presentational/elements';
import { FormValidations } from 'Global/constants'

const Password = ({ user, handleSubmit }) => (
    <Formik
        validationSchema={
            Yup.object().shape({
                password: FormValidations.password,
                passwordConfirm: FormValidations.passwordConfirm
            })
        }
        initialValues={{
            password: '',
            passwordConfirm: '',
            id: user.id,
            isNewbie: user.isNewbie
        }}
        onSubmit={(values, action) => {
            handleSubmit(values)
            action.setSubmitting(false)
        }}>
        {(props) => <PasswordForm {...props} />}
    </Formik>
)

const PasswordForm = (props) => (
    <Form
        {...props}
        data={[
            { name: 'password', component: PasswordComponent },
            { name: 'passwordConfirm', component: PasswordComponent }]}
        submitTitle='Cambiar contraseña' />
)

export default Password