import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn, isCurrentUserNewbie } from 'Config/helper'
import { Status } from 'Config/constants'
import { Formik, Form, Field } from 'formik';
import { FormComponent as LoginForm } from 'Presentational/login/Form'
import Yup from 'yup';

class Login extends React.Component {
    componentWillMount() {
        if (loggedIn() && !isCurrentUserNewbie()) {
            history.replace('/dashboard')
        }
        else if (loggedIn() && isCurrentUserNewbie()) {
            history.replace('/login/newbie')
        }
    }

    render() {
        require('Style/gridColumns2.scss');

        if (this.props.loading)
            return <p>Loading...</p>

        return (
            <Formik
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string().email("Correo no valido").required("Correo requerido"),
                        password: Yup.string().min(6,"Mínimo 6 caracteres").required("Contraseña requerida")
                    })
                }
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values, action) => { 
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
                        <LoginForm 
                            handleSubmit={ handleSubmit } 
                            error={ this.props.error } 
                            errors={ errors }
                            touched={ touched } 
                            isSubmitting={ isSubmitting } 
                        />)
                    }   
                }
            </Formik>
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
        handleSubmit: (loginAttempt, setErrors) => {
            dispatch(thunks.user.login(loginAttempt, setErrors))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)