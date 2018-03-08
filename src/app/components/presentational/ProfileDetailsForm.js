import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import Yup from 'yup';
import { isEmpty } from 'Config/helper'

export default class ProfileDetailsForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setErrors(nextProps.error);
        }
    }

    render() {
        require('Style/gridColumns2.scss');
        
        const { handleSubmit, user, logout, error } = this.props

        const initialValues = {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            password: user.password || '',
            office: user.office || '',
            phoneNumber: user.phoneNumber || '',
            campus: user.campus || 'MTY',
            id: user.id || '1',
            isNewbie: user.isNewbie || true
        }

        const campusList = [
            { key: 'MTY', text: 'Campus Monterrey' },
            { key: 'CDMX', text: 'Campus Ciudad de México' },
            { key: 'AGS', text: 'Campus Aguascalientes' },
            { key: 'CS', text: 'Campus Chiapas' },
            { key: 'CH', text: 'Campus Chihuahua' },
            { key: 'CDJZ', text: 'Campus Ciudad Juarez' },
            { key: 'CDOB', text: 'Campus Ciudad Obregón' },
            { key: 'CV', text: 'Campus Cuernavaca' },
            { key: 'EDMX', text: 'Campus Estado de México' },
            { key: 'GDL', text: 'Campus Guadalajara' },
            { key: 'HDL', text: 'Campus Hidalgo' },
            { key: 'IRP', text: 'Campus Irapuato' },
            { key: 'LGN', text: 'Campus Laguna' },
            { key: 'LN', text: 'Campus León' },
            { key: 'MOR', text: 'Campus Morelia' },
            { key: 'PL', text: 'Campus Puebla' },
            { key: 'QRO', text: 'Campus Querétaro' },
            { key: 'SLT', text: 'Campus Saltillo' },
            { key: 'SLP', text: 'Campus San Luis Potosí' },
            { key: 'SF', text: 'Campus Santa Fe' },
            { key: 'SNL', text: 'Campus Sinaloa' },
            { key: 'SNTE', text: 'Campus Sonora Norte' },
            { key: 'TMP', text: 'Campus Tampico' },
            { key: 'TOL', text: 'Campus Toluca' },
            { key: 'ZAC', text: 'Campus Zacatecas' },]

        return (
            <div>
            <p>         
                Hola {user.firstName}! <br/>
                Antes de continuar, por favor completa tus datos:
            </p>
            <Formik
                validationSchema={
                    Yup.object().shape({
                        firstName: Yup.string().required("Nombre requerido"),
                        lastName: Yup.string().required("Apellido requerido"),
                        password: Yup.string().min(6,"Mínimo 6 caracteres").required("Contraseña requerida"),
                        office: Yup.string().uppercase("Escribir oficina usando mayusculas").required("Oficina requerido"),
                        phoneNumber: Yup.string().min(8, "Se necesita un número de minimo 8 digitos").required("Teléfono requerido"),
                    })
                }
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    values.id = user.id
                    handleSubmit(values)
                    actions.setSubmitting(false)
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setErrors
                }) => {
                    this.setErrors = setErrors
                    return (
                        <Form>
                            {/*reqres error, change to our api (unauthorized)*/}
                            {!isEmpty(error) && <p className="message-error">{errors.error}</p>}

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
                }}
            </Formik>
            </div>
        )
    }
}
