import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, TextAreaComponent, EmailComponent, PasswordComponent } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/index'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { Persist } from 'formik-persist'
import { CharactersLeft } from "Presentational/elements/CharactersLeft"

export const EventsFormsIndex = ({ handleSubmit, error, errors, touched, isSubmitting, campusList, categoryList, characterCount, values }) => {
    return <Form className="event-form event-form-general">
        {!Entity.isEmpty(error) && <p className="message-error">{error}</p>}

        <div className="form-general-data">
            <div>Nombre:</div>
            <Field name="name" placeholder="Nombre" className={((touched.name && errors.name) ? 'emptyField' : 'readyField')} component={TextComponent} />
            {touched.name && errors.name && <p className="message-error">{errors.name}</p>}

            <div>Descripción:</div>
            <Field name="description" placeholder="Descripción" className={((touched.description && errors.description) ? 'emptyField' : 'readyField')} component={TextAreaComponent} />
            <div className="description-count">
                <CharactersLeft description={values.description} touched={touched.description} errors={errors.description}/>
                {touched.description && errors.description && <label className="message-error">{errors.description}</label>}
            </div>

            <div>Campus:</div>
            <Field name="campus"
                list={campusList}
                className={((touched.campus && errors.campus) ? 'emptyField' : 'readyField')}
                component={SelectComponent} />
            {touched.campus && errors.campus && <p className="message-error">{errors.campus}</p>}

            <div>Categoría:</div>
            <Field name="category"
                list={categoryList}
                className={((touched.category && errors.category) ? 'emptyField' : 'readyField')}
                component={SelectComponent} />
            {touched.category && errors.category && <p className="message-error">{errors.category}</p>}
        </div>

        <Persist name="event-general" />
    </Form>
}