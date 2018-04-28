import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, ToggleField, TagField, MoneyField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsOptional = (props) => (
    <React.Fragment>
        {!Entity.isEmpty(props.error) && <p className='message-error'>{props.error}</p>}

        <TagField label='tags' placeholder='' {...props} />

        <MoneyField label='cost' inputSizeSmall {...props} />

        <TagField label='majors' placeholder='' inputSizeSmall {...props} />

        <TagField label='languages' placeholder='' inputSizeSmall {...props} />

        <ToggleField label='publicEvent' toggleMessage='Exclusivo para alumnos del Tec' toggleMessageInfoTrigger='off' inputSizeSmall {...props} />

        <ToggleField label='petFriendly' toggleMessage='Mascotas son bienvenidas' toggleMessageInfoTrigger='on' inputSizeSmall {...props} />

    </React.Fragment>
)