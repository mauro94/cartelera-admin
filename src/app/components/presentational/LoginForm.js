// Render Prop
import React from 'react';
import { Formik } from 'formik';

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
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values, actions) => {
                    handleSubmit(values)
                    actions.setSubmitting(false)
                }}
            >
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
                        <form onSubmit={handleSubmit}>
                            {/*reqres error, change to our api (unauthorized)*/}
                            {errors.error && <div>{errors.error}</div>}
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && <div>{errors.email}</div>}
                            <input
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
