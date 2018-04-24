import React from 'react'
import { Field } from 'formik'
import { Password } from 'Presentational/elements/Password'
import { DatePickerElement } from 'Presentational/elements/DatePickerElement'
import { Format, Labels } from 'Helpers/index'
import { update } from 'Logic/actions/thunks/event';
import { DateSinglePicker } from 'Presentational/elements/DateSinglePicker';
import {TagManager} from 'Presentational/elements/Tags';

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

export const EmailField = (props) => (
  <React.Fragment>
  <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field name={props.label} className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')} type="email"/>
          <span className='separator'> </span>
      </div>
      {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </div>
  </React.Fragment>
)

export const TagField = (props) => (
    <React.Fragment>
    <div className={props.inputSizeSmall ? 'input-container sm' : 'input-container'}>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field name={props.label} className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')} type="text" {...props} component={TagManager}/>
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
          {Format.capitalize(Labels[props.fieldId])}
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

export const ToggleField = (props) => (
  <React.Fragment>
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
  </React.Fragment>
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
                <Field name={props.label} className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')} component={Password}/>
                <span className='separator'> </span>
            </div>
            {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
        </div>
      </React.Fragment>
    );

  export const ToggleComponent = (props) => {
      return <div className="switch-container">
        <label className="switch">
          <input className={((props.touched[props.label] && props.errors[props.label]) ? 'switch__input emptyField' : 'switch__input readyField')}
                 type="checkbox"
                 name={props.field.name}
                 checked={props.values[props.label] == 'on' ? true: false}
                 onChange={(e)=> { updateFormik(props.field.name, (e.target.checked ? 'on' : 'off'), props.setFieldValue, props.setTouched, props.touched) }}/>
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

export const SelectComponent = (props) => (
  <div className="form-field">
    <select
      {...props.field}
      {...props}>
      {props.list.map(Option)}
    </select>
  </div>
);

export const SelectorComponent = (props) => (
  <React.Fragment>
  <div className='input-container sm'>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.field.name])}
          </label>
          <Field name={props.field.name} 
                list={props.list}
                className={((props.form.touched[props.field.name] && props.form.errors[props.field.name]) ? 'emptyField' : 'readyField')}
                component={SelectComponent} />
      </div>
  </div>
  </React.Fragment>
);

export const FieldDate = (props) => (
  <Field
  name={props.label}
  className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')}
  updateFormik = {updateFormik}
  type="text"
  {...props}
  component={DatePickerElement}/>
)

export const FieldSingleDate = (props) => (
  <Field
  name={props.label}
  className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')}
  updateFormik = {updateFormik}
  type="text"
  {...props}
  component={DateSinglePicker}/>
)


const updateFormik = (name, value, setValue, setTouched, touched) => {
  setValue(name, value)
  setTouched({ ...touched, [name]: true})
}

const Option = element => (
  <option key={element.key} value={element.key}> {element.text} </option>
)
