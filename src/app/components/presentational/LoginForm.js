
import React, {Fragment} from 'react';
import { Formik, Form, Field } from 'formik';
import { EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import Yup from 'yup';
import 'Style/gridColumns2.scss';
import 'Style/loginForm.scss';
import { isEmpty } from 'Config/helper'

export default class LoginForm extends React.Component {
    render() {
        const { handleSubmit, user } = this.props

        const initialValues = {
            email: '',
            password: '',
        }

        return (
            <Formik
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string().email("Correo no valido").required("Correo requerido"),
                        password: Yup.string().required("Contraseña requerida")
                    })
                }
                initialValues={initialValues}
                onSubmit={(values, action) => { 
                    handleSubmit(values)
                    action.setSubmitting(false)
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
                    return(
                        <div className="item3">
                            <Form>
                                {!isEmpty(user.error) && <p className="message-error">{user.error}</p>}
                                
                                <Field name="email" id={"emailLoginField"} component={EmailComponent}/>
                                { touched.email && errors.email && <p className="message-error">{errors.email}</p> }
                                
                                <Field name="password" id={"passwordLoginField"} component={PasswordComponent}/>
                                {touched.password && errors.password && <p className="message-error">{errors.password}</p> }
                                
                                <div className="form-field">
                                    <button className="button-submit" disabled={isSubmitting}>Iniciar Sesíon</button>
                                </div>
                            </Form>
                        </div>
                    )}
                }
            </Formik>
        );
    }
}
