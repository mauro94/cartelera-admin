
import React, {Fragment} from 'react';
import { Formik, Form, Field } from 'formik';
import { EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import Yup from 'yup';
import 'Style/gridColumns2.scss';
import 'Style/loginForm.scss';


const initialValues = {
    email: '',
    password: '',
}

export default class LoginForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.error) {
            this.setErrors(nextProps.user.error);
        }
    }

    render() {
        const { handleSubmit, user } = this.props
        return (
            <Fragment>
            <div className="grid-container">
                <div className="item1">
                    <h1>Cartelera</h1>
                    <h1>de</h1>
                    <h1>Innovación</h1>
                    <h1>y</h1>
                    <h1>Emprendimiento</h1>
                </div>
                <div className="item2">
                    <Formik
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string().email("Correo no valido").required("Correo requerido"),
                                password: Yup.string().required("Contraseña requerida")
                            })
                        }
                        initialValues={initialValues}
                        onSubmit={(values, actions) => { 
                            handleSubmit(values)
                            action.setSubmitting(false)
                        }}
                        render={({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <div className="item3">
                        <Form>
                            {errors.error && <p>{errors.error}</p>}
                            <div className="form-field">
                                <Field name="email" id={"emailLoginField"} component={EmailComponent}/>
                                { touched.email && errors.email && <p className="message-error">{errors.email}</p> }
                            </div>
                            <div className="form-field">
                                <Field name="password" id={"passwordLoginField"} component={PasswordComponent}/>
                                {touched.password && errors.password && <p className="message-error">{errors.password}</p> }
                            </div>
                            <div className="form-field">
                                <button className="button-submit" disabled={isSubmitting}>Submit</button>
                            </div>
                        </Form>
                        </div>
                    )}
                    />
                </div>
            </div>
            </Fragment>
        );
    }
}
