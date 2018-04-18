import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, TextAreaComponent, EmailComponent, PasswordComponent, TextField, TextFieldArea } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/index'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { Persist } from 'formik-persist'
import { CharactersLeft } from "Presentational/elements/CharactersLeft"

export const EventsFormsIndex = (props) => {
    return <Form className="event-form event-form-general">
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <div className="form-general-data">
            <TextField label='name' {...props}/>

            <TextFieldArea label='description' {...props}/>
            
        </div>
    </Form>
}

