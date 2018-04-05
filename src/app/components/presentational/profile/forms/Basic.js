import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'
import {
    SelectComponent,
    TextComponent,
    PasswordComponent,
    FormComponent as Form
} from 'Presentational/elements'
import { campusList } from 'Config/Test'
import { FormValidations } from 'Global/constants'

const Basic = ({ user, handleSubmit, logout }) => {
    let validations = {
        firstName: FormValidations.firstName,
        lastName: FormValidations.lastName,
        office: FormValidations.office,
        phoneNumber: FormValidations.phoneNumber
    }
    if (user.isNewbie) {
        validations = {
            ...validations,
            password: FormValidations.password,
            passwordConfirm: FormValidations.passwordConfirm
        }
    }
    let initialValues = user
    if (user.isNewbie) {
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
                values.id = user.id
                values.isNewbie = false
                handleSubmit(values)
                action.setSubmitting(false)
            }}>
            {(props) => <BasicForm {...props} isNewbie={user.isNewbie} logout={logout} />}
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
    if (props.isNewbie) {
        data = [
            ...data,
            { name: 'password', component: PasswordComponent },
            { name: 'passwordConfirm', component: PasswordComponent }]
    }
    return (
        <Form
            {...props}
            data={data}
            submitTitle={props.isNewbie ? 'Continuar' : 'Actualizar'}
            canLogout={props.isNewbie}
            allRequired={props.isNewbie}
            logout={props.logout} />
    )
}

export default Basic