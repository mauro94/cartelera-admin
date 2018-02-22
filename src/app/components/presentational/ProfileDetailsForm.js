import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik';

export default class ProfileDetailsForm extends React.Component {
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
                    firstName: user.current.firstName || '',
                    lastName: user.current.lastName || '',
                    password: user.current.password || '',
                    office: user.current.office || '',
                    phoneNumber: user.current.phoneNumber || '',
                    campus: user.current.campus || 'MTY',
                    id: user.current.id || '1',
                    isNewbie: user.current.isNewbie || true
                }}
                onSubmit={(values, actions) => {
                    values.isNewbie = false
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
                            <Field
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                placeholder="Nombre"
                            />
                            {errors.firstName && <div>{errors.firstName}</div>}
                            <Field
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                placeholder="Apellido"
                            />
                            {errors.lastName && <div>{errors.lastName}</div>}
                            <Field
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Contraseña"
                            />
                            {errors.password && <div>{errors.password}</div>}
                            <Field
                                type="text"
                                name="office"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.office}
                                placeholder="Oficina"
                            />
                            {errors.office && <div>{errors.office}</div>}
                            <Field
                                type="text"
                                name="phoneNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                                placeholder="Teléfono"
                            />
                            {errors.phoneNumber && <div>{errors.phoneNumber}</div>}
                            <Field component="select" name="campus">
                                <option value="MTY">Monterrey</option>
                                <option value="QTO">Querétaro</option>
                                <option value="CDMX">Ciudad de México</option>
                            </Field>
                            {errors.campus && <div>{errors.campus}</div>}
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
