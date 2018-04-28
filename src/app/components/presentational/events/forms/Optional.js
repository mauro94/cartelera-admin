import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, ToggleField, TagField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsOptional = (props) => (
    <Form >

        <TagField label='tags' placeholder="" {...props}/>

        <TextField label='cost' inputSizeSmall {...props}/>

        <TextField label='majors' inputSizeSmall {...props}/>

        <TextField label='languages' inputSizeSmall {...props}/>

        <ToggleField label='publicEvent' toggleMessage="Exclusivo para alumnos del Tec" toggleMessageInfoTrigger="off" inputSizeSmall {...props}/>

        <ToggleField label='petFriendly' toggleMessage="Mascotas son bienvenidas" toggleMessageInfoTrigger="on" inputSizeSmall {...props}/>
    </Form>
)
