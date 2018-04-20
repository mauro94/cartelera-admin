import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, SelectDate, TextField, TextFieldArea, FieldDate, FieldSingleDate, ToggleField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

export const EventsFormsRegistration = (props) => (
    <Form className="event-form">
        {!Entity.isEmpty(props.error) && <p className='message-error'>{props.error}</p>}

        <ToggleField label='hasRegistration' toggleMessage="Registro se maneja por fuera/no existe registro" toggleMessageInfoTrigger="off" {...props}/>

        {props.values.hasRegistration == "on" && <TextFieldArea label='registrationMessage' {...props}/>}

        {props.values.hasRegistration == "off"  && <TextField label='registrationUrl' {...props}/>}

        <TextFieldArea label='requirementsToRegister' {...props}/>

        <ToggleField label='hasDeadline' {...props}/>

        {props.values.hasDeadline == "on" && <FieldSingleDate label='registrationDeadline' {...props}/>}

    </Form>
)
