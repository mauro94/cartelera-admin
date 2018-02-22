// Render Prop
import React from 'react';
import { Formik, Field } from 'formik';
import EmailComponent from 'Presentational/InputFields';

const onSubmit=(values, actions) => {
    handleSubmit(values)
    actions.setSubmitting(false)
}

const initialValues = {
    email: '',
    password: '',
}

export default class LoginForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.session.error) {
            this.setErrors(nextProps.session.error);
        }
    }

    render() {
        const { handleSubmit, session } = this.props
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
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

                            <Field name="email" value={values.email} component={EmailComponent}/>

                            {errors.email && <div>{errors.email}</div>}

                            <Field
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
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
