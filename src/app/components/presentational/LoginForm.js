// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'

export default class LoginForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.error) {
            this.setErrors(nextProps.user.error);
        }
    }

    render() {
        const { handleSubmit, user } = this.props
        return (
            <div className="addGameForm">
        <Formik
          validationSchema={
            Yup.object().shape({
                email: Yup.string().email("Correo no valido").required(),
                password: Yup.string().required()
              })
          }
          /*initialValues={{
            title: 'asdf',
            releaseYear: '',
            genre: '',
            price: '12',
          }}*/
          onSubmit={(values, actions) => { 
            handleSubmit(values)
            action.setSubmitting(false)
          }}
          render={({
            values,
            errors,
            touched,
            isSubmitting
            }) => (
            <Form>
              <div>
                { touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email"/>
              </div>
              <div>
                {touched.password && errors.password && <p>{errors.password}</p> }
                <Field type="password" name="password" placeholder="Password"/>
              </div>
              <button disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        />
      </div>
        )
    }
}
