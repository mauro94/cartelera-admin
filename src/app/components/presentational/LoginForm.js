import React from 'react';
import { Formik, Form, Field } from 'formik'
import { EmailComponent, PasswordComponent } from 'Presentational/InputFields';
import Yup from 'yup'

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
            <div>
                <Formik
                    validationSchema={
                        Yup.object().shape({
                            email: Yup.string().email("Correo no valido").required(),
                            password: Yup.string().required()
                        })
                    }
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        handleSubmit(values)
                        actions.setSubmitting(false)
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
                            <Form>
                                <div>
                                    {errors.error && <p>{errors.error}</p>}
                                </div>
                                <div>
                                    {touched.email && errors.email && <p>{errors.email}</p>}
                                    <Field name="email" id={"emailLoginField"} component={EmailComponent} />
                                </div>
                                <div>
                                    {touched.password && errors.password && <p>{errors.password}</p>}
                                    <Field name="password" id={"passwordLoginField"} component={PasswordComponent} />
                                </div>
                                <button disabled={isSubmitting}>Submit</button>
                            </Form>
                        )}
                />
            </div>
        )
    }
}
