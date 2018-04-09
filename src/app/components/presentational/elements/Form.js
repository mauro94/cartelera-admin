import React from 'react'
import { Form, Field } from 'formik';
import { Labels, Entity, Format } from 'Helpers/index'

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
    <div>
        <Field
            name={props.attr}
            list={props.list}
            className={((props.touched[props.attr] && props.errors[props.attr]) ?
                'emptyField' : 'readyField')}
            component={props.component}
            placeholder={Format.capitalize(Labels[props.attr])}
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
        <button className="button-submit" disabled={disabled}>
            {props.children}
        </button >)
}

export const FormComponent = (props) => {
    let entries = props.data.map(
        (d, index) => (
            <Entry
                {...props}
                attr={d.name}
                component={d.component}
                key={`Entry-${index}`}
                list={d.list} />
        ))

    return (
        <Form>
            {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}
            {entries}
            <div className="form-field buttons">
                <SubmitButton {...props}>
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