import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ProfileDetailsForm } from 'Presentational/ProfileDetailsForm'
import { history, isCurrentUserNewbie, withAuth } from 'Config/helper'
import { Formik, Form, Field } from 'formik';
import { Status } from 'Config/constants'
import Yup from 'yup';

class FirstLogin extends React.Component {
    componentWillMount() {
        if (!isCurrentUserNewbie()) {
            history.replace('/dashboard')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!isCurrentUserNewbie()) {
            history.replace('/dashboard')
        }
    }

    render() {
        require('Style/gridColumns2.scss');

        const campusList = [
            { key: 'MTY', text: 'Campus Monterrey' },
            { key: 'CDMX', text: 'Campus Ciudad de México' },
            { key: 'AGS', text: 'Campus Aguascalientes' },
            { key: 'CS', text: 'Campus Chiapas' },
            { key: 'CH', text: 'Campus Chihuahua' },
            { key: 'CDJZ', text: 'Campus Ciudad Juarez' },
            { key: 'CDOB', text: 'Campus Ciudad Obregón' },
            { key: 'CV', text: 'Campus Cuernavaca' },
            { key: 'EDMX', text: 'Campus Estado de México' },
            { key: 'GDL', text: 'Campus Guadalajara' },
            { key: 'HDL', text: 'Campus Hidalgo' },
            { key: 'IRP', text: 'Campus Irapuato' },
            { key: 'LGN', text: 'Campus Laguna' },
            { key: 'LN', text: 'Campus León' },
            { key: 'MOR', text: 'Campus Morelia' },
            { key: 'PL', text: 'Campus Puebla' },
            { key: 'QRO', text: 'Campus Querétaro' },
            { key: 'SLT', text: 'Campus Saltillo' },
            { key: 'SLP', text: 'Campus San Luis Potosí' },
            { key: 'SF', text: 'Campus Santa Fe' },
            { key: 'SNL', text: 'Campus Sinaloa' },
            { key: 'SNTE', text: 'Campus Sonora Norte' },
            { key: 'TMP', text: 'Campus Tampico' },
            { key: 'TOL', text: 'Campus Toluca' },
            { key: 'ZAC', text: 'Campus Zacatecas' }]
        
        if (this.props.loading)
            return <p>Loading...</p>

        return (
            <div>
                <p>         
                    Hola {this.props.user.firstName}! <br/>
                    Antes de continuar, por favor completa tus datos:
                </p>
                <Formik
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string().required("Nombre requerido"),
                            lastName: Yup.string().required("Apellido requerido"),
                            password: Yup.string().min(6,"Mínimo 6 caracteres").required("Contraseña requerida"),
                            office: Yup.string().uppercase("Escribir oficina usando mayusculas").required("Oficina requerido"),
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

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FirstLogin))