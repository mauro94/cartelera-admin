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
//<Form
        //     {...props}
        //     data={data}
        //     className="event-form"
        //     submitTitle={props.isNewbie && props.current ? 'Continuar' : 'Actualizar'}
        //     canLogout={props.isNewbie && props.current}
        //     allRequired={props.isNewbie && props.current}
        //     logout={props.logout} />
const BasicForm = (props) => (
    <Form className="event-form">
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <TextField label='firstName' {...props}/>

        <TextField label='lastName' {...props}/> 

        <TextField label='office' {...props}/>

        <TextField label='phoneNumber' {...props}/>

        <TextField label='campus' {...props}/>

        { props.isNewbie && props.current && <TextField label='password' {...props}/> }
        { props.isNewbie && props.current && <TextField label='passwordConfirm' {...props}/> }

        <SubmitButton {...props}>
            { props.isNewbie && props.current ? 'Continuar' : 'Actualizar' }
        </SubmitButton>

        {
            props.logout &&
            <button className="button-newbie-logout" onClick={props.logout}>
                Cerrar Sesión
            </button>
        }
    </Form>
)

// export default load('user', Basic)
export default Basic