// Render Prop
import React from 'react';
import { Formik, Field } from 'formik';
import { EmailComponent, PasswordComponent } from 'Presentational/InputFields';

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
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    handleSubmit(values)
                    actions.setSubmitting(false)
                }}
                >{({
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
                        <form onSubmit={handleSubmit}>
                            {/*reqres error, change to our api (unauthorized)*/}
                            {errors.error && <div>{errors.error}</div>}
                            <Field name="email"
                                   id={"emailLoginField"}
                                   component={EmailComponent}/>
                            {errors.email && <div>{errors.email}</div>}
                            <Field name="password"
                                   id={"passwordLoginField"}
                                   component={PasswordComponent}/>
                            {errors.password && <div>{errors.password}</div>}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )
                }}
            </Formik>
        )
    }
}
