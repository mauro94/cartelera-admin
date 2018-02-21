import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
    const { handleSubmit, session } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm