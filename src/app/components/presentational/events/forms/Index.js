import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'
import { FormButtonSubmit } from 'Presentational/elements/Form'

export const EventsFormsIndex = ({ handleSubmit, error, errors, touched, isSubmitting, campusList, categoryList}) => (
    <Form className="event-form">
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <Field name="name" placeholder="Nombre" className={((touched.name && errors.name) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.name && errors.name && <p className="message-error">{errors.name}</p>}

        <Field name="description" placeholder="Descripción" className={((touched.description && errors.description) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.description && errors.description && <p className="message-error">{errors.description}</p>}

        <Field name="location" placeholder="Oficina" className={((touched.location && errors.location) ? 'emptyField' : 'readyField')}component={TextComponent} />
        {touched.location && errors.location && <p className="message-error">{errors.location}</p>}

        <Field name="campus"
            list={campusList}
            className={((touched.campus && errors.campus) ? 'emptyField' : 'readyField')}
            component={SelectComponent}/>
        {touched.campus && errors.campus && <p className="message-error">{errors.campus}</p>}

        <Field name="category"
            list={categoryList}
            className={((touched.category && errors.category) ? 'emptyField' : 'readyField')}
            component={SelectComponent}/>
        {touched.category && errors.category && <p className="message-error">{errors.category}</p>}
    </Form>        
)
