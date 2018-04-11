import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'
import { campusList } from 'Config/Test'
import { load } from 'Containers/hoc'
import {
    CurrentUserFormValidations,
    BasicUserFormValidations,
    PasswordFormValidations
} from 'Helpers/constants'
import {
    SelectComponent,
    TextComponent,
    PasswordComponent,
    FormComponent as Form
} from 'Presentational/elements'

const Basic = (props) => {
    let validations = props.current ? CurrentUserFormValidations : BasicUserFormValidations
    if (props.user.isNewbie && props.current) {
        validations = {
            ...validations,
            ...PasswordFormValidations
        }
    }
    let initialValues = props.user
    if (props.user.isNewbie && props.current) {
        initialValues = {
            ...initialValues,
            password: '',
            passwordConfirm: ''
        }
    }
    return (
        <Formik
            validationSchema={
                Yup.object().shape(validations)
            }
            initialValues={initialValues}
            onSubmit={(values, action) => {
                values.id = props.user.id
                values.isNewbie = props.current
                props.handleSubmit(values)
                action.setSubmitting(false)
            }}>
            {(formProps) =>
                <BasicForm {...formProps}
                    current={props.current}
                    isNewbie={props.user.isNewbie}
                    logout={props.logout} />}
        </Formik>
    )
}

const BasicForm = (props) => {
    let data = [
        { name: 'firstName', component: TextComponent },
        { name: 'lastName', component: TextComponent },
        { name: 'office', component: TextComponent },
        { name: 'phoneNumber', component: TextComponent },
        { name: 'campus', component: SelectComponent, list: campusList }
    ]
    if (props.isNewbie && props.current) {
        data = [
            ...data,
            { name: 'password', component: PasswordComponent },
            { name: 'passwordConfirm', component: PasswordComponent }]
    }
    return (
        <Form
            {...props}
            data={data}
            submitTitle={props.isNewbie && props.current ? 'Continuar' : 'Actualizar'}
            canLogout={props.isNewbie && props.current}
            allRequired={props.isNewbie && props.current}
            logout={props.logout} />
    )
}

export default load('user', Basic)