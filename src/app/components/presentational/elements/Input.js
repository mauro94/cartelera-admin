import React from 'react'
import { Field } from 'formik'
import { Password } from 'Presentational/elements/Password'
import { DatePickerElement } from 'Presentational/elements/DatePickerElement'
import { Format, Labels } from 'Helpers/index'
import { update } from 'Logic/actions/thunks/event';
import { DateSinglePicker } from 'Presentational/elements/DateSinglePicker';
import { TagManager } from 'Presentational/elements/Tags';

const MoneyFieldComponent = (props) => (
  <div className='with-static-placeholder'>
    <input
      type='text'
      className='static-placeholder'
      value='$'
      disabled />
    <input
      {...props.field}
      type='number'
      step='0.01' />
    <input
      type='text'
      className='static-placeholder'
      value='MXN'
      disabled />
  </div>
)

export const TextField = (props) => (
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field name={props.label} className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')} type="text" />
      <span className='separator'> </span>
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const MoneyField = (props) => (
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field
        {...props}
        name={props.label}
        className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')}
        component={MoneyFieldComponent} />
      <span className='separator'></span>
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const EmailField = (props) => (
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field name={props.label} className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')} type="email" />
      <span className='separator'> </span>
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const TagField = (props) => (
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field
        name={props.label}
        className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')}
        type="text"
        {...props}
        updateFormik={(tags) => updateFormik(props.label, tags, props.setFieldValue, props.setTouched, props.touched)}
        component={TagManager} />
      <span className='separator'> </span>
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const TextFieldDate = (props) => (
  <div className='input-container'>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.fieldId])}
      </label>
      <Field
        onClick={props.onClick}
        value={props.value}
        name={props.label}
        className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')}
        type="text" />
      <span className='separator'> </span>
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const TextFieldArea = (props) => (
  <div className='input-container'>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field name={props.label} {...props} component={TextFieldAreaComponent} />
      <span className='separator'> </span>
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const Selector = (props) => (
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
    <div className='text-input'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field name={props.label}
        list={props.list ? props.list : []}
        className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')}
        component={props.component ? props.component : SelectComponent} />
    </div>
    {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
)

export const ToggleField = (props) => (
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
    <div className='text-input toggle'>
      <label>
        {Format.capitalize(Labels[props.label])}
      </label>
      <Field name={props.label}
        {...props}
        component={ToggleComponent} />
      {!props.inputSizeSmall && (props.values[props.label] == props.toggleMessageInfoTrigger) && <p className="message-toggle-info">{props.toggleMessage}</p>}
    </div>
    {props.inputSizeSmall && (props.values[props.label] == props.toggleMessageInfoTrigger) && <p className="message-toggle-info sm">{props.toggleMessage}</p>}
  </div>
)

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

export const PasswordField = (props) => (
  <React.Fragment>
    <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
      <div className='text-input'>
        <label>
          {Format.capitalize(Labels[props.label])}
        </label>
        <Field name={props.label} className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')} component={Password} />
        <span className='separator'> </span>
      </div>
      {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
    </div>
  </React.Fragment>
);

export const ToggleComponent = (props) => {
  return <div className="switch-container">
    <label className="switch">
      <input className={((touchedWithErrors(props)) ? 'switch__input emptyField' : 'switch__input readyField')}
        type="checkbox"
        name={props.field.name}
        checked={props.values[props.label] == 'on' ? true : false}
        onChange={(e) => { updateFormik(props.field.name, (e.target.checked ? 'on' : 'off'), props.setFieldValue, props.setTouched, props.touched) }} />
      <div className="switch__checkbox"></div>
    </label>
  </div>
}

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
    className={((touchedWithErrors(props)) ? 'textarea emptyField' : 'textarea readyField')}
    rows="1"
    contentEditable="true"
    suppressContentEditableWarning
    name={props.field.name}
    onInput={props.textareaHandleChange}
    onBlur={(e) => {
      updateFormik(props.field.name, e.target.textContent, props.setFieldValue, props.setTouched, props.touched)
    }}>
    {props.field.value}
  </div>
}

export const SelectComponent = (props) => (
  <div className="form-field">
    <select
      {...props.field}
      {...props}>
      {props.list.map(Option)}
    </select>
  </div>
)

export const FieldDate = (props) => (
  <Field
    name={props.label}
    className={((touchedWithErrors(props)) ? 'emptyField' : 'readyField')}
    updateFormik={(date) => updateFormik(props.label, date, props.setFieldValue, props.setTouched, props.touched)}
    type="text"
    {...props}
    component={DatePickerElement} />
)

export const FieldSingleDate = (props) => (
  <Field
    name={props.label}
    className={((touchedWithErrors(props)) ? 'emptyField' : 'readyField')}
    updateFormik={(date) => updateFormik(props.label, date, props.setFieldValue, props.setTouched, props.touched)}
    type="text"
    {...props}
    component={DateSinglePicker} />
)

const touchedWithErrors = (props) => (
  props.touched[props.label] && props.errors[props.label]
)

const updateFormik = (name, value, setValue, setTouched, touched) => {
  setValue(name, value)
  setTouched({ ...touched, [name]: true })
}

const Option = element => (
  <option key={element.key} value={element.key}> {element.text} </option>
)
