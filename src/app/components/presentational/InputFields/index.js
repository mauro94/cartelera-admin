import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'

export const EmailComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <input
        type="email"
        placeholder="email"
        {...field}
        {...props}
    />
);

export const PasswordComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
      <input
          type="password"
          placeholder="password"
          {...field}
          {...props}
      />
  );