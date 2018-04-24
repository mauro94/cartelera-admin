import React from 'react'
import { Formik, Form } from 'formik'
import Yup from 'yup'
import { campusList } from 'Config/Test'
import { load } from 'Containers/hoc'
import {
    CurrentUserFormValidations,
    BasicUserFormValidations,
    PasswordFormValidations,
    Entity
} from 'Helpers/index'
import {
    TextField,
    SubmitButton
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
            validationSchema={
                Yup.object().shape(validations)
            }
            initialValues={initialValues}
            onSubmit={(values, action) => {
                values.id = props.user.id
                values.isNewbie = props.current ? false : props.user.isNewbie
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

const BasicForm = (props) => (
    <Form className="event-form">
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <TextField label='firstName' inputSizeSmall {...props}/>

        <TextField label='lastName' inputSizeSmall {...props}/> 

        <TextField label='office' inputSizeSmall {...props}/>

        <TextField label='phoneNumber' inputSizeSmall {...props}/>

        <TextField label='campus' inputSizeSmall {...props}/>

        { props.isNewbie && props.current && <PasswordField label='password' inputSizeSmall {...props}/> }
        { props.isNewbie && props.current && <PasswordField label='passwordConfirm' inputSizeSmall {...props}/> }

        <div className="form-field buttons">
            <SubmitButton {...props}>
                { props.isNewbie && props.current ? 'Continuar' : 'Actualizar' }
            </SubmitButton>

            {
                props.logout &&
                <button className="button-newbie-logout" onClick={props.logout}>
                    Cerrar Sesión
                </button>
            }
        </div>

    </Form>
)

// export default load('user', Basic)
export default Basic