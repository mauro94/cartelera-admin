import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
import { makeOption } from 'Config/helper'

export const EmailComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
      <input
          type="email"
          placeholder="Correo Electrónico"
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
        placeholder="Contraseña"
        {...field}
        {...props}
    />
  );

  export const TextComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div>
      <input
          type="text"
          {...field}
          {...props}
      />
    </div>
  );

  export const SelectComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
    campusList,
    instruction,
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div>
      <div>
          <label>{instruction}</label>
      </div>
      <select
        {...field}
        {...props}>
        {campusList.map(makeOption)} 
      </select>
    </div>
  );