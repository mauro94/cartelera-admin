import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ProfileDetailsForm } from 'Presentational/ProfileDetailsForm'
import { history } from 'Config/helper'
import { Status } from 'Config/constants'
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { campusList } from 'Config/Test'
import { FormMessageEditProfile } from 'Presentational/FormComponents'

class EditProfile extends React.Component {
    render() {
        if (this.props.loading)
            return <p>Loading...</p>
        
        return (
            <div>
                {/* < FormMessageEditProfile name={ this.props.user.firstName }/> */}
                <Formik
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string().required("Nombre requerido"),
                            lastName: Yup.string().required("Apellido requerido"),
                            office: Yup.string().uppercase("Escribir oficina usando mayusculas").required("Oficina requerida"),
                            phoneNumber: Yup.string().min(8, "Se necesita un número de minimo 8 digitos").required("Teléfono requerido"),
                        })
                    }
                    initialValues={{
                        firstName: this.props.user.firstName || '',
                        lastName: this.props.user.lastName || '',
                        office: this.props.user.office || '',
                        phoneNumber: this.props.user.phoneNumber || '',
                        campus: this.props.user.campus || 'MTY',
                        id: this.props.user.id || '1',
                        isNewbie: this.props.user.isNewbie || true
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
                            <ProfileDetailsForm 
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