
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import { isEmpty } from 'Config/helper'

export const LoginForm = ({ handleSubmit, error, errors, touched, isSubmitting }) => (
    <Form>
        {!isEmpty(error) && <p className="message-error">{error}</p>}
        
        <Field name="email" id={"emailLoginField"} component={EmailComponent}/>
        { touched.email && errors.email && <p className="message-error">{errors.email}</p> }
        
        <Field name="password" id={"passwordLoginField"} component={PasswordComponent}/>
        {touched.password && errors.password && <p className="message-error">{errors.password}</p> }
        
        <div className="form-field">
            <button className="button-submit" disabled={isSubmitting}>Iniciar Sesión</button>
        </div>
    </Form>
)
