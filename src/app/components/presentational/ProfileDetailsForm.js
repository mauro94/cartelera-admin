import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import { isEmpty } from 'Config/helper'

export const ProfileDetailsForm = ({ handleSubmit, error, errors, touched, isSubmitting, campusList, logout }) => (
    <Form>
        {/*reqres error, change to our api (unauthorized)*/}
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <Field name="firstName" placeholder="Nombre" className={((touched.firstName && errors.firstName) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.firstName && errors.firstName && <p className="message-error">{errors.firstName}</p>}

        <Field name="lastName" placeholder="Apellido" className={((touched.lastName && errors.lastName) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.lastName && errors.lastName && <p className="message-error">{errors.lastName}</p>}

        <Field name="password" className={((touched.password && errors.password) ? 'emptyField' : 'readyField')} component={PasswordComponent}/>
        {touched.password && errors.password && <p className="message-error">{errors.password}</p>}

        {touched.password && !errors.password && <Field name="passwordConfirm" placeholder="Confirmar contraseña" className={((touched.passwordConfirm && errors.passwordConfirm) ? 'emptyField' : 'readyField')} component={PasswordComponent}/>}
        {touched.passwordConfirm && errors.passwordConfirm && !errors.password && <p className="message-error">{errors.passwordConfirm}</p>}

        <Field name="office" placeholder="Oficina" className={((touched.office && errors.office) ? 'emptyField' : 'readyField')}component={TextComponent} />
        {touched.office && errors.office && <p className="message-error">{errors.office}</p>}

        <Field name="phoneNumber" placeholder="Teléfono" className={((touched.phoneNumber && errors.phoneNumber) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.phoneNumber && errors.phoneNumber && <p className="message-error">{errors.phoneNumber}</p>}

        <Field name="selectCampus"
            campusList={campusList}
            className={((touched.campus && errors.campus) ? 'emptyField' : 'readyField')}
            component={SelectComponent}/>
        {touched.campus && errors.campus && <p className="message-error">{errors.campus}</p>}
        
        <div className="form-field buttons">
            <button className="button-submit" disabled={((
                touched.firstName && !errors.firstName &&
                touched.lastName && !errors.lastName &&
                touched.password && !errors.password &&
                touched.office && !errors.office &&
                touched.phoneNumber && !errors.phoneNumber && !errors.campus &&
                !isSubmitting) ? false : true)}>
                Continuar
            </button>
            <button className="button-newbie-logout" onClick={logout}>Cerrar Sesión</button>
        </div>
    </Form>        
)
