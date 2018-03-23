import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Index as ProfileForm } from 'Presentational/profile/forms/Index'
import { Password as PasswordForm } from 'Presentational/profile/forms/Password'
import { history } from 'Config/helper'
import { Status } from 'Config/constants'
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { campusList } from 'Config/Test'
import { FormMessageEditProfile } from 'Presentational/elements/Form'

class EditProfile extends React.Component {
    render() {
        if (this.props.loading)
            return <p>Loading...</p>
        
        if (history.location.pathname == "/dashboard/profile/edit")
            return (
                <div>
                    {/* < FormMessageEditProfile name={ this.props.user.firstName }/> */}
                    <Formik
                        validationSchema={
                            Yup.object().shape({
                                firstName: Yup.string().required("Nombre requerido"),
                                lastName: Yup.string().required("Apellido requerido"),
                                office: Yup.string().required("Oficina requerida"),
                                phoneNumber: Yup.string().matches(/^\+?\d+$/, "Teléfono inválido").min(8,"Mínimo 8 caracteres").required("Teléfono requerido"),
                            })
                        }
                        initialValues={{
                            firstName: this.props.user.firstName || '',
                            lastName: this.props.user.lastName || '',
                            office: this.props.user.office || '',
                            phoneNumber: this.props.user.phoneNumber || '',
                            campus: this.props.user.campus || 'MTY',
                            id: this.props.user.id || '1',
                            isNewbie: this.props.user.isNewbie || false
                        }}
                        mapPropsToValues={{ 
                            firstName: '',
                            lastName: '',
                            office: '',
                            phoneNumber: '',
                            campus: '',
                            id: '',
                            isNewbie: ''
                        }}
                        onSubmit={(values, action) => {
                            values.id = this.props.user.id
                            this.props.handleSubmit(values)
                            action.setSubmitting(false)
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => {
                            return (
                                <ProfileForm 
                                    handleSubmit={ handleSubmit } 
                                    error={ this.props.error } 
                                    errors={ errors }
                                    touched={ touched } 
                                    isSubmitting={ isSubmitting } 
                                    campusList={ campusList }
                                    logout={ this.props.logout }
                                    isEditProfile={ true }
                                />)
                            }
                        }
                    </Formik>
                </div>
            )
        else
            return (
                <div>
                    <Formik
                        validationSchema={
                            Yup.object().shape({
                                password: Yup.string().min(6,"Mínimo 6 caracteres").required("Contraseña requerida"),
                                passwordConfirm: Yup.string().required("Confirmación de contraseña requerida").oneOf([Yup.ref('password'), null], "Contraseñas deben ser iguales")
                            })
                        }
                        initialValues={{
                            password: this.props.user.password || '',
                            id: this.props.user.id || '1',
                            isNewbie: this.props.user.isNewbie || false
                        }}
                        mapPropsToValues={{ 
                            password: '',
                            passwordConfirm: '',
                            id: '',
                            isNewbie: ''
                        }}
                        onSubmit={(values, action) => {
                            values.id = this.props.user.id
                            this.props.handleSubmit(values)
                            action.setSubmitting(false)
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => {
                            return (
                                <PasswordForm 
                                    handleSubmit={ handleSubmit } 
                                    error={ this.props.error } 
                                    errors={ errors }
                                    touched={ touched } 
                                    isSubmitting={ isSubmitting } 
                                    isEditProfile={ true }
                                />)
                            }
                        }
                    </Formik>
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        loading: state.user.status == Status.WaitingOnServer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSubmit: profileDetails => {
            for (var key in props.user) {
                if (profileDetails.hasOwnProperty(key)) {
                    if (props.user[key] == profileDetails[key] && key != "id") {
                        delete profileDetails[key]
                    }
                }
            }
            dispatch(thunks.user.update(profileDetails))
        },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)