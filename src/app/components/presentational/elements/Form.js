import React from 'react'
import Spinner from 'react-spinkit'
import { Form, Field } from 'formik';
import { Labels, Entity, Format } from 'Helpers/index'
import { Button } from './Button'

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
    return (
        <Button
            type='primary lg'
            className='button-submit'
            disabled={!props.isValid || props.isSubmitting}>
            {!props.isSubmitting && props.children}
            {props.isSubmitting && <Spinner name="pulse" />}
        </Button>
    )
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
                {props.logout &&
                    <Button
                        type='secondary'
                        handleClick={() => props.logout()}>
                        {'Cerrar sesión'}
                    </Button>
                }
            </div>
        </Form>)
}