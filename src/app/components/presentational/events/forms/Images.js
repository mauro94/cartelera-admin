import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsImages = (props) => (
    <React.Fragment>
        <div className='photo-editor'>
            <TextField label='photo' inputSizeSmall {...props} />

            <div className='show-image'>
                <img src={props.values.photo} />
            </div>

        </div>

        <div className='photo-editor'>
            <TextField label='schedule' inputSizeSmall {...props} />

            <div className='show-image'>
                <img src={props.values.schedule} />
            </div>

        </div>

    </React.Fragment>
)
