import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
import { makeOption } from 'Config/helper'
import { Password } from 'Presentational/elements/Password'

export const EmailComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <input
        type="email"
        placeholder="Correo Electrónico"
        {...field}
        {...props}
      />
    </div>
  );

export const PasswordComponent = Password

export const TextComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <input
        type="text"
        {...field}
        {...props}
      />
    </div>
  );

export const SelectComponent = (props) => (
  <div className="form-field">
    <div>
      <label>{props.instruction}</label>
    </div>
    <select
      {...props.field}
      {...props}>
      {props.list.map(Option)}
    </select>
  </div>
);

const Option = element => (
  <option key={element.key} value={element.key}> {element.text} </option>
)