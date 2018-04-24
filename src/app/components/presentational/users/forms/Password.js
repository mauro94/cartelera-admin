import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { PasswordFormValidations } from 'Helpers/constants'
import {
    PasswordComponent,
    FormComponent as Form
} from 'Presentational/elements';

const Password = (props) => (
    <Formik
        validationSchema={
            Yup.object().shape(PasswordFormValidations)
        }
        initialValues={{
            password: '',
            passwordConfirm: '',
            id: props.user.id,
            isNewbie: props.user.isNewbie
        }}
        onSubmit={(values, action) => {
            props.handleSubmit(values)
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
        submitTitle='Actualizar' />
)

// export default load('user', Password)
export default Password