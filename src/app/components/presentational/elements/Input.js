import React from 'react'
import { Field } from 'formik'
export { Password as PasswordComponent } from 'Presentational/elements/Password'
import { DatePickerElement } from 'Presentational/elements/DatePickerElement'
import { Format, Labels } from 'Helpers/index'
import { update } from 'Logic/actions/thunks/event';

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

export const TextField = (props) => (
  <React.Fragment>
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field name={props.label} className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')} type="text"/>
          <span className='separator'> </span>
      </div>
      {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
  </React.Fragment>
)

export const TextFieldDate = (props) => (
  <React.Fragment>
  <div className='input-container'>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field
          onClick={props.onClick}
          value={props.value}
          name={props.label}
          className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')}
          type="text"/>
          <span className='separator'> </span>
      </div>
      {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
  </React.Fragment>
)


export const FieldDate = (props) => (
  <Field
  name={props.label}
  className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')}
  updateFormik = {updateFormik}
  type="text"
  {...props}
  component={DatePickerElement}/>
)

export const TextFieldArea = (props) => (
  <React.Fragment>
  <div className='input-container'>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field name={props.label} {...props} component={TextFieldAreaComponent}/>
          <span className='separator'> </span>
      </div>
      {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
  </React.Fragment>
)


export const Selector = (props) => (
  <React.Fragment>
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field name={props.label} 
                list={props.list}
                className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')}
                component={SelectComponent} />
      </div>
      {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
  </React.Fragment>
)


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
  )

export const TextFieldAreaComponent = (props) => {
      return <div 
        className={((props.touched[props.label] && props.errors[props.label]) ? 'textarea emptyField' : 'textarea readyField')}
        rows="1"
        contentEditable="true"
        name={props.field.name}
        onInput={props.textareaHandleChange}
        onBlur={(e)=> { 
          updateFormik(props.field.name, e.target.textContent, props.setFieldValue, props.setTouched, props.touched)}}>
        {props.field.value}
      </div>
}

const updateFormik = (name, value, setValue, setTouched, touched) => {
  setValue(name, value)
  setTouched({ touched, [name]: true})
}

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
