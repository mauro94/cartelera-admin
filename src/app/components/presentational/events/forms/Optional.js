import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, ToggleField, TagField, MoneyField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsOptional = (props) => (
    <React.Fragment>

        <TagField label='tagNames' placeholder='' {...props} />

        <MoneyField label='cost' inputSizeSmall {...props} />

        <TagField label='majors' placeholder='' inputSizeSmall {...props} />

        <TagField label='languages' placeholder='' inputSizeSmall {...props} />

        <ToggleField label='publicEvent' toggleMessage='Exclusivo para alumnos del Tec' inputSizeSmall {...props} />

        <ToggleField label='petFriendly' toggleMessage='Mascotas son bienvenidas' toggleMessageInfoTrigger inputSizeSmall {...props} />

    </React.Fragment>
)