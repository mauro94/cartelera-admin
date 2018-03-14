import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import { isEmpty } from 'Config/helper'

export const ProfileDetailsForm = ({ handleSubmit, error, errors, touched, isSubmitting, campusList, logout }) => (
    <Form>
        {/*reqres error, change to our api (unauthorized)*/}
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <Field name="firstName" placeholder="Nombre" component={TextComponent} />
        {errors.firstName && <p className="message-error">{errors.firstName}</p>}

        <Field name="lastName" placeholder="Apellido" component={TextComponent} />
        {errors.lastName && <p className="message-error">{errors.lastName}</p>}

        <Field name="password" component={PasswordComponent} />
        {errors.password && <p className="message-error">{errors.password}</p>}

        <Field name="office" placeholder="Oficina" component={TextComponent} />
        {errors.office && <p className="message-error">{errors.office}</p>}

        <Field name="phoneNumber" placeholder="Teléfono" component={TextComponent} />
        {errors.phoneNumber && <p className="message-error">{errors.phoneNumber}</p>}

        <Field name="selectCampus"
            campusList={campusList}
            component={SelectComponent} />
        {errors.campus && <p className="message-error">{errors.campus}</p>}
        
        <div className="form-field buttons">
            <button className="button-submit" disabled={isSubmitting}>Continuar</button>
            <button className="button-newbie-logout" onClick={logout}>Cerrar Sesión</button>
        </div>
    </Form>        
)
