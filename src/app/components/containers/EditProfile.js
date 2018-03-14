import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ProfileDetailsForm } from 'Presentational/ProfileDetailsForm'
import { history } from 'Config/helper'
import { Status } from 'Config/constants'
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { campusList } from 'Config/Test'

class EditProfile extends React.Component {
    render() {
        if (this.props.loading)
            return <p>Loading...</p>
        
        return (
            <div>
                <p>         
                    Hola {this.props.user.email}! <br/>
                    Antes de continuar, por favor completa tus datos:
                </p>
                <Formik
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string().required("Nombre requerido"),
                            lastName: Yup.string().required("Apellido requerido"),
                            password: Yup.string().min(6,"Mínimo 6 caracteres").required("Contraseña requerida"),
                            passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], "Contraseñas deben ser iguales").required("Confirmación requerida"),
                            office: Yup.string().uppercase("Escribir oficina usando mayusculas").required("Oficina requerida"),
                            phoneNumber: Yup.string().min(8, "Se necesita un número de minimo 8 digitos").required("Teléfono requerido"),
                        })
                    }
                    initialValues={{
                        firstName: this.props.user.firstName || '',
                        lastName: this.props.user.lastName || '',
                        password: this.props.user.password || '',
                        office: this.props.user.office || '',
                        phoneNumber: this.props.user.phoneNumber || '',
                        campus: this.props.user.campus || 'MTY',
                        id: this.props.user.id || '1',
                        isNewbie: this.props.user.isNewbie || true
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
                            <ProfileDetailsForm 
                                handleSubmit={ handleSubmit } 
                                error={ this.props.error } 
                                errors={ errors }
                                touched={ touched } 
                                isSubmitting={ isSubmitting } 
                                campusList={ campusList }
                                logout={ this.props.logout }
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

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: profileDetails => {
            dispatch(thunks.user.update(profileDetails))
        },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)