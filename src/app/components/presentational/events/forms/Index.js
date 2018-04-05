import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { Persist } from 'formik-persist'

export const EventsFormsIndex = ({ handleSubmit, error, errors, touched, isSubmitting, campusList, categoryList, handleFormChange}) => (
    <Form className="event-form">
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <div>Nombre:</div>
        <Field name="name" placeholder="Nombre" className={((touched.name && errors.name) ? 'emptyField' : 'readyField')} onChange={ () =>  {handleFormChange({value})} } component={TextComponent} />
        {touched.name && errors.name && <p className="message-error">{errors.name}</p>}

        <div>Descripción:</div>
        <Field name="description" placeholder="Descripción" className={((touched.description && errors.description) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.description && errors.description && <p className="message-error">{errors.description}</p>}
        
        <div>Campus:</div>
        <Field name="campus"
            list={campusList}
            className={((touched.campus && errors.campus) ? 'emptyField' : 'readyField')}
            component={SelectComponent}/>
        {touched.campus && errors.campus && <p className="message-error">{errors.campus}</p>}

        <div>Categoría:</div>
        <Field name="category"
            list={categoryList}
            className={((touched.category && errors.category) ? 'emptyField' : 'readyField')}
            component={SelectComponent}/>
        {touched.category && errors.category && <p className="message-error">{errors.category}</p>}

        <Persist name="event-general" />
    </Form>        
)
