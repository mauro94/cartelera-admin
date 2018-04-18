import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup'
import Spinner from 'react-spinkit'
import { Labels, Entity, Format } from 'Helpers/index'
import { CategoryFormValidations } from 'Helpers/constants'
import { TextComponent } from 'Presentational/elements'

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
                values,
                props.handleSubmit(values)
                action.setSubmitting(false)
            }}>
            {(formProps) =>
                <BasicForm {...formProps} />}
        </Formik>
    )
}

const BasicForm = (props) => {
    let data = [
        { name: 'name', component: TextComponent }
    ]
    return (
        <FormComponent
            {...props}
            data={data}
            submitTitle='Actualizar'
            allRequired={true} />
    )
}

export const FormComponent = (props) => {
    let entry = 
            <Entry
                {...props}
                attr={props.data[0].name}
                component={props.data.component}
                key='Entry-0'
                list={props.data.list} />

    return (
        <Form>
            {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}
            {entry}
            <div className="form-field buttons">
                <SubmitButton {...props}>
                    {props.submitTitle}
                </SubmitButton>
            </div>
        </Form>)
}

export const Entry = (props) => (
    <div>
        <Field
            name={props.attr}
            list={props.list}
            className={((props.touched[props.attr] && props.errors[props.attr]) ?
                'emptyField' : 'readyField')}
            component={props.component}
            placeholder={'Categoría'}
        />
        {
            props.touched[props.attr] &&
            props.errors[props.attr] &&
            <p className="message-error">{props.errors[props.attr]}</p>
        }
    </div>
)

export const SubmitButton = (props) => {
    let emptyValues = Entity.hasEmptyElements(props.values)
    let untouched = Entity.isEmpty(props.touched)
    let hasErrors = !Entity.isEmpty(props.errors)
    let disabled = untouched ||
        (props.allRequired && emptyValues) ||
        hasErrors ||
        props.isSubmitting
    return (
        <button
            className="button-submit"
            disabled={props.disabled}>
            {!props.isSubmitting && props.children}
            {props.isSubmitting && <Spinner name="pulse" />}
        </button>)
}

export default Basic;