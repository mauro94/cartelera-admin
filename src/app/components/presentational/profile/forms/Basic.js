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
import { isEmpty, formValidations } from 'Config/helper'

const Basic = ({ user, handleSubmit, logout }) => {
    let validations = {
        firstName: formValidations.firstName,
        lastName: formValidations.lastName,
        office: formValidations.office,
        phoneNumber: formValidations.phoneNumber
    }
    if (user.isNewbie) {
        validations = {
            ...validations,
            password: formValidations.password,
            passwordConfirm: formValidations.passwordConfirm
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
        { name: 'campus', component: SelectCampus }
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

const SelectCampus = (props) => (
    <SelectComponent {...props} list={campusList} />
)

export default Basic