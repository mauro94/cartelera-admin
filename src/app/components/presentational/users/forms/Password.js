import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { PasswordFormValidations } from 'Helpers/constants'
import {
    PasswordComponent,
    FormComponent as Form
} from 'Presentational/elements';

const Password = ({ user, handleSubmit }) => (
    <Formik
        validationSchema={
            Yup.object().shape(PasswordFormValidations)
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

export default load('user', Password)