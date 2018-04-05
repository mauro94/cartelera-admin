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

const filledValues = (values) => {
    for (var key in values) {
        if (values[key] == '')
            return false
    }
    return true
}

export const SubmitButton = (props) => {
    let emptyValues = !filledValues(props.values)
    let disabled = (props.allRequired && emptyValues) ||
        !isEmpty(props.errors) ||
        props.isSubmitting
    return (
        <button className="button-submit" disabled={disabled}>
            {props.children}
        </button >)
}

export const FormComponent = (props) => {
    let entries = props.data.map((d, index) => <Entry
        attr={d.name}
        errors={props.errors}
        touched={props.touched}
        component={d.component}
        key={`Entry-${index}`} />
    )
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