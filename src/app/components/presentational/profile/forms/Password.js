import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { PasswordComponent } from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'
import { FormButtonSubmitPassword } from 'Presentational/elements/Form'

export const Password = ({ handleSubmit, error, errors, touched, isSubmitting, isEditProfile }) => (
    <Form>
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        {<Field name="password" className={((touched.password && errors.password) ? 'emptyField' : 'readyField')} component={PasswordComponent}/> }
        {touched.password && errors.password && <p className="message-error">{errors.password}</p>}

        {<Field name="passwordConfirm" placeholder="Confirmar contraseña" className={((touched.passwordConfirm && errors.passwordConfirm) ? 'emptyField' : 'readyField')} component={PasswordComponent}/>}
        {touched.passwordConfirm && errors.passwordConfirm && <p className="message-error">{errors.passwordConfirm}</p>}
        
        <div className="form-field buttons">
            < FormButtonSubmitPassword errors={ errors } isSubmitting={ isSubmitting } touched={ touched }/>
        </div>
    </Form>        
)
