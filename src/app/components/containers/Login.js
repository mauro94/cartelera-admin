import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import LoginForm from 'Presentational/LoginForm'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: loginAttempt => {
            dispatch(thunks.user.login(loginAttempt))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default Login