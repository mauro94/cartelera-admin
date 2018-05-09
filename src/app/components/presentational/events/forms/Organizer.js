import React, { Fragment } from 'react'
import { Form } from 'formik'
import { TextField } from 'Presentational/elements/Input'
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsOrganizer = (props) => (
    <React.Fragment>
        <TextField label='contactName' {...props} />

        <TextField label='contactEmail' {...props} />

        <TextField label='contactPhone' {...props} />

        <TextField label='facebookUrl' inputSizeSmall {...props} />

        <TextField label='twitterUrl' inputSizeSmall {...props} />
    </React.Fragment>
)
