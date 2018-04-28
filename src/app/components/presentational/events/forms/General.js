import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, TextFieldArea, Selector, FieldDate } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/index'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { CharactersLeft } from "Presentational/elements/CharactersLeft"

export const EventsFormsIndex = (props) => {
    return <React.Fragment>
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <div className="form-general-data">
            <TextField label='name' {...props} />

            <TextFieldArea label='description' {...props} />

            <TextField label='location' {...props} />

            <Selector label='campus' inputSizeSmall list={props.campusList} {...props} />

            <Selector label='category' inputSizeSmall list={props.categoryList}  {...props} />

            <FieldDate label='rangeDatetime'{...props} />

        </div>

    </React.Fragment>
}