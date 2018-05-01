import React from 'react'
import { Formik, Form } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { campusList } from 'Config/Test'
import {
    CurrentUserFormValidations,
    BasicUserFormValidations,
    PasswordFormValidations,
    Entity
} from 'Helpers/index'
import {
    Button,
    TextField,
    SubmitButton,
    Selector,
    SelectComponent,
    ModalAlert
} from 'Presentational/elements'

import { PasswordField } from 'Presentational/elements/Input';

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
            enableReinitialize
            validationSchema={
                Yup.object().shape(validations)
            }
            initialValues={initialValues}
            onSubmit={(values, action) => {
                values.id = props.user.id
                values.isNewbie = props.current ? false : props.user.isNewbie
                props.showModal ? ModalAlert({
                    modal: props.modal,
                    handleConfirm: () => props.handleConfirmSubmit(values)
                }) : props.handleSubmit(values)
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

const BasicForm = (props) => (
    <Form >
        <TextField label='firstName' inputSizeSmall {...props} />

        <TextField label='lastName' inputSizeSmall {...props} />

        <TextField label='office' inputSizeSmall {...props} />

        <TextField label='phoneNumber' inputSizeSmall {...props} />

        <Selector label='campus' inputSizeSmall component={CampusDropdown} {...props} />

        {props.isNewbie && props.current && <PasswordField label='password' inputSizeSmall {...props} />}
        {props.isNewbie && props.current && <PasswordField label='passwordConfirm' inputSizeSmall {...props} />}

        <div className="form-field buttons">
            <SubmitButton {...props}>
                {props.isNewbie && props.current ? 'Continuar' : 'Actualizar'}
            </SubmitButton>
        </div>
    </Form>
)

const CampusDropdown = (props) => (
    <SelectComponent
        list={campusList}
        {...props} />
)

// export default load('user', Basic)
export default Basic