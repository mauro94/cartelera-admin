import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, ToggleField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsOptional = (props) => (
    <Form className="event-form">
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <TextField label='cost' inputSizeSmall {...props}/>

        <TextField label='majors' inputSizeSmall {...props}/>

        <ToggleField label='public' inputSizeSmall {...props}/>
        
    </Form>
)
