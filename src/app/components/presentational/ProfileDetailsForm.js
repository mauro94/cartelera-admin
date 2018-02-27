import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, PasswordComponent } from 'Presentational/InputFields';

export default class ProfileDetailsForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.error) {
            this.setErrors(nextProps.user.error);
        }
    }
    render() {
        const { handleSubmit, user } = this.props

        const initialValues = {
            firstName: user.current.firstName || '',
            lastName: user.current.lastName || '',
            password: user.current.password || '',
            office: user.current.office || '',
            phoneNumber: user.current.phoneNumber || '',
            campus: user.current.campus || 'MTY',
            id: user.current.id || '1',
            isNewbie: user.current.isNewbie || true
        }

        const campusList = [
            {key: 'MTY', text: 'Monterrey'},
            {key: 'CDMX', text: 'Ciudad de México'},
            {key: 'QTO', text: 'Queretaro'}]

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
                            <Field name="firstName" placeholder="Nombre" component={TextComponent}/>
                            {errors.firstName && <div>{errors.firstName}</div>}

                            <Field name="lastName" placeholder="Apellido" component={TextComponent}/>
                            {errors.lastName && <div>{errors.lastName}</div>}

                            <Field name="password" component={PasswordComponent}/>
                            {errors.password && <div>{errors.password}</div>}

                            <Field name="office" placeholder="Oficina" component={TextComponent}/>
                            {errors.office && <div>{errors.office}</div>}

                            <Field name="phoneNumber" placeholder="Teléfono" component={TextComponent}/>
                            {errors.phoneNumber && <div>{errors.phoneNumber}</div>}

                            <Field name="selectCampus" 
                                   instruction={"Selecciona tu campus"}
                                   campusList={campusList}
                                   component={SelectComponent}/>
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
