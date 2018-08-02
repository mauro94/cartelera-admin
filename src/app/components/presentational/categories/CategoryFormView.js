import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup'
import Spinner from 'react-spinkit'
import { Labels, Entity, Format } from 'Helpers/index'
import { CategoryFormValidations } from 'Helpers/constants'
import { TextField, SubmitButton } from 'Presentational/elements'
import { load } from 'Containers/hoc'

const Basic = (props) => {
    let validations = CategoryFormValidations
    let initialValues = props.category
    return (
        <Formik
            validationSchema={
                Yup.object().shape(validations)
            }
            initialValues={initialValues}
            onSubmit={(values, action) => {
                values.id = props.category.id,
                    props.handleSubmit(values)
                action.setSubmitting(false)
            }}>
            {(formProps) =>
                <BasicForm {...formProps} />}
        </Formik>
    )
}

const BasicForm = (props) => (
    <Form>
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <TextField label='name' {...props} />

        <div className="form-field buttons">
            <SubmitButton {...props}>
                Actualizar
            </SubmitButton>
        </div>
    </Form>
)

export default load('category', Basic)