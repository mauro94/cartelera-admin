import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
import { makeOption } from 'Config/helper'
import { Password } from 'Presentational/elements/Password'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

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

export const SelectDate = ({
  instruction,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <DatePicker
        showTimeSelect
        timeFormat="HH:mm"
        minDate={moment()}
        maxDate={moment().add(1, "year")}
        dateFormat="LLL"
        timeCaption="Tiempo"
        placeholderText="Fecha y Hora de Inicio"
        locale="es-mx"
        isClearable={true}
      />
    </div>
);

const Option = element => (
  <option key={element.key} value={element.key}> {element.text} </option>
)