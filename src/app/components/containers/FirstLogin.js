import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ProfileFormsIndex } from 'Presentational/profile/forms/Index'
import { history, isCurrentUserNewbie, withAuth } from 'Config/helper'
import { Formik, Form, Field } from 'formik';
import { Status } from 'Config/constants'
import Yup from 'yup';
import { campusList } from 'Config/Test'
import { FormMessageWelcome } from 'Presentational/elements/Form'

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

        if (this.props.loading)
            return <p>Loading...</p>

        return (
            <div>
                < FormMessageWelcome mail={this.props.user.email} />
                <Formik
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string().required("Nombre requerido"),
                            lastName: Yup.string().required("Apellido requerido"),
                            password: Yup.string().min(6, "Mínimo 6 caracteres").required("Contraseña requerida"),
                            passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], "Contraseñas deben ser iguales").required("Confirmación requerida"),
                            office: Yup.string().required("Oficina requerida"),
                            phoneNumber: Yup.string().matches(/^\+?\d+$/, "Teléfono inválido").min(8, "Mínimo 8 caracteres").required("Teléfono requerido")
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
                            <ProfileFormsIndex
                                handleSubmit={handleSubmit}
                                error={this.props.error}
                                errors={errors}
                                touched={touched}
                                isSubmitting={isSubmitting}
                                campusList={campusList}
                                logout={this.props.logout}
                                isEditProfile={false}
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
            profileDetails["is_newbie"] = false
            dispatch(thunks.user.update(profileDetails))
        },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FirstLogin))