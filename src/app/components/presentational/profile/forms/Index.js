import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'

export const ProfileFormsIndex = ({ handleSubmit, error, errors, touched, isSubmitting, campusList, logout , isEditProfile}) => (
    <Form>
        {/*reqres error, change to our api (unauthorized)*/}
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <Field name="firstName" placeholder="Nombre" className={((touched.firstName && errors.firstName) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.firstName && errors.firstName && <p className="message-error">{errors.firstName}</p>}

        <Field name="lastName" placeholder="Apellido" className={((touched.lastName && errors.lastName) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.lastName && errors.lastName && <p className="message-error">{errors.lastName}</p>}

        {!isEditProfile && <Field name="password" className={((touched.password && errors.password) ? 'emptyField' : 'readyField')} component={PasswordComponent}/> }
        {touched.password && errors.password && <p className="message-error">{errors.password}</p>}

        {!isEditProfile && touched.password && !errors.password && <Field name="passwordConfirm" placeholder="Confirmar contraseña" className={((touched.passwordConfirm && errors.passwordConfirm) ? 'emptyField' : 'readyField')} component={PasswordComponent}/>}
        {touched.passwordConfirm && errors.passwordConfirm && !errors.password && <p className="message-error">{errors.passwordConfirm}</p>}

        <Field name="office" placeholder="Oficina" className={((touched.office && errors.office) ? 'emptyField' : 'readyField')}component={TextComponent} />
        {touched.office && errors.office && <p className="message-error">{errors.office}</p>}

        <Field name="phoneNumber" placeholder="Teléfono" className={((touched.phoneNumber && errors.phoneNumber) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.phoneNumber && errors.phoneNumber && <p className="message-error">{errors.phoneNumber}</p>}

        <Field name="campus"
            campusList={campusList}
            className={((touched.campus && errors.campus) ? 'emptyField' : 'readyField')}
            component={SelectComponent}/>
        {touched.campus && errors.campus && <p className="message-error">{errors.campus}</p>}
        
        <div className="form-field buttons">
            < FormButtonSubmit errors={ errors } isSubmitting={ isSubmitting } isEditProfile={ isEditProfile } touched={ touched }/>
            < FormButtonSignout  logout={ logout } isEditProfile={ isEditProfile }/>
        </div>
    </Form>        
)
