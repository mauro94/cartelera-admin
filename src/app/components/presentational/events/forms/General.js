import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, TextFieldArea, Selector, FieldDate } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/index'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { CharactersLeft } from "Presentational/elements/CharactersLeft"
import CategoriesDropdown from 'Containers/categories/Dropdown'

export const EventsFormsIndex = (props) => {
    return <React.Fragment>

        <div className="form-general-data">
            <TextField label='name' {...props} />

            <TextFieldArea label='description' {...props} />

            <TextField label='location' {...props} />

            <Selector label='campus' inputSizeSmall list={props.campusList} {...props} />

            {/*<Selector label='categoryId' inputSizeSmall component={CategoriesDropdown} {...props} />*/}

            <div className={'input-container sm'}>
                <div className='text-input'>
                    <label>
                        {'Categoría'}
                    </label>
                    <Field name={'categoryId'}
                        className={(touchedWithErrors(props) ? 'emptyField' : 'readyField')}
                        component={CategoriesDropdown} />
                </div>
                {touchedWithErrors(props) && <p className="message-error">{props.errors[props.label]}</p>}
            </div>

            <FieldDate label='rangeDatetime'{...props} />

        </div>

    </React.Fragment>
}

const touchedWithErrors = (props) => (
    props.touched[props.label] && props.errors[props.label]
)