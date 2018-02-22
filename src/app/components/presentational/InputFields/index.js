import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'

const EmailComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <input 
        id="emailLoginField"
        type="email"
        {...field}
        {...props}
    />
);

export default EmailComponent