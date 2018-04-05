import React from 'react'
import { Form, Field } from 'formik';
import { isEmpty, haveSameKeys, capitalizeFirstLetter } from 'Config/helper'
import { Labels } from 'Config/constants'

export const WelcomeMessage = ({ mail }) => (
    <p>
        ¡Hola {mail}! <br />
        Antes de continuar, por favor completa tus datos:
    </p>
)

export const EditProfileMessage = ({ name }) => (
    <p>
        ¡Hola {name}! <br />
        Aquí puedes modificar los datos de tu perfil:
    </p>
)

export const Entry = (props) => (
    <React.Fragment>
        <Field
            name={props.attr}
            className={((props.touched[props.attr] && props.errors[props.attr]) ?
                'emptyField' : 'readyField')}
            component={props.component}
            placeholder={capitalizeFirstLetter(Labels[props.attr])}
        />
        {
            props.touched[props.attr] &&
            props.errors[props.attr] &&
            <p className="message-error">{props.errors[props.attr]}</p>
        }
    </React.Fragment>
)

export const EntrySelect = (props) => (
    <React.Fragment>
        <Field
            name="campus"
            list={props.list}
            className={((props.touched.campus && props.errors.campus) ?
                'emptyField' : 'readyField')}
            component={props.component} />
        {
            props.touched.campus &&
            props.errors.campus &&
            <p className="message-error">{props.errors.campus}</p>
        }
    </React.Fragment>
)

const filledValues = (values) => {
    for (var key in values) {
        if (!values[key] && (typeof values[key] != 'boolean'))
            return false
    }
    return true
}

export const SubmitButton = (props) => {
    let emptyValues = !filledValues(props.values)
    let untouched = isEmpty(props.touched)
    let hasErrors = !isEmpty(props.errors)
    let disabled = untouched ||
        (props.allRequired && emptyValues) ||
        hasErrors ||
        props.isSubmitting
    return (
        <button className="button-submit" disabled={disabled}>
            {props.children}
        </button >)
}

export const FormComponent = (props) => {
    let entries = props.data.map((d, index) => {
        let newProps = {
            ...props,
            attr: d.name,
            component: d.component,
            key: `Entry-${index}`
        }
        if (d.list) {
            return <EntrySelect
                {...newProps}
                list={d.list} />
        }
        return <Entry {...newProps} />
    })
    return (
        <Form>
            {!isEmpty(props.error) && <p className="message-error">{props.error}</p>}
            {entries}
            <div className="form-field buttons">
                <SubmitButton
                    {...props}
                    allRequired={props.allRequired}>
                    {props.submitTitle}
                </SubmitButton>
                {props.canLogout &&
                    <button className="button-newbie-logout" onClick={props.logout}>
                        Cerrar Sesión
                </button>
                }
            </div>
        </Form >)
}