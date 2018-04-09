import React from 'react'
import { Field } from 'formik'
export { Password as PasswordComponent } from 'Presentational/elements/Password'
import { DatePickerElement } from 'Presentational/elements/DatePickerElement'

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

export const TextAreaComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <textarea
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
      <DatePickerElement {...props.field} {...props}/>
    </div>
  );

const Option = element => (
  <option key={element.key} value={element.key}> {element.text} </option>
)