import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, TextFieldArea, Selector, FieldDate, SelectComponent } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/index'
import { campusList } from 'Config/Test'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { CharactersLeft } from "Presentational/elements/CharactersLeft"
import CategoriesDropdown from 'Containers/categories/Dropdown'

export const EventsFormsIndex = (props) => {
    return (
        <React.Fragment>

            <div className="form-general-data">
                <TextField label='name' {...props} />

                <TextFieldArea label='description' {...props} />

                <TextField label='location' {...props} />

                <Selector label='campus' inputSizeSmall component={CampusDropdown} {...props} />

                <Selector label='categoryId' inputSizeSmall component={CategoriesDropdown} {...props} />

                <FieldDate label='rangeDatetime'{...props} />

            </div>

        </React.Fragment>
    )
}

const CampusDropdown = (props) => (
    <SelectComponent
        list={campusList}
        {...props} />
)