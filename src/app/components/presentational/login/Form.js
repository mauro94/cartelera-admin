
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { EmailComponent, PasswordComponent } from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'

export const FormComponent = ({ handleSubmit, error, errors, touched, isSubmitting }) => (
    <Form>
        {!isEmpty(error) && <p className="message-error">{error}</p>}
        
        <Field name="email" id={"emailLoginField"} className={((touched.email && errors.email) ? 'emptyField' : 'readyField')} component={EmailComponent}/>
        { touched.email && errors.email && <p className="message-error">{errors.email}</p> }
        
        <Field name="password" id={"passwordLoginField"} className={((touched.password && errors.password)? 'emptyField' : 'readyField')} component={PasswordComponent} />
        { touched.password && errors.password && <p className="message-error">{errors.password}</p> }
        
        <div className="form-field">
            <button className="button-submit" disabled={((touched.email && !errors.email && touched.password && !errors.password && !isSubmitting) ? false : true)}>Iniciar Sesión</button>
        </div>
    </Form>
)
