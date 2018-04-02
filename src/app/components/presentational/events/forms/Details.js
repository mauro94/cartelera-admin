import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, SelectDate} from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsDetails = ({ handleSubmit, error, errors, touched, isSubmitting }) => (
    <Form>
        {/*reqres error, change to our api (unauthorized)*/}
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <Field name="startDateTime" placeholder="Fecha Inicio" className={((touched.startDateTime && errors.startDateTime) ? 'emptyField' : 'readyField')} component={SelectDate} />
        {touched.startDateTime && errors.startDateTime && <p className="message-error">{errors.startDateTime}</p>}

    </Form>        
)
