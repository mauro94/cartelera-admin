import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, SelectDate, TextField, TextFieldArea, FieldDate, FieldSingleDate, ToggleField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

export const EventsFormsRegistration = (props) => (
    <Form >

        <div className='registration-toggler'>
            <ToggleField label='hasRegistration' {...props}/>

            {props.values.hasRegistration == "on" &&
                <TextFieldArea label='registrationMessage' {...props}/>
            }

            {props.values.hasRegistration == "off"  &&
                <TextField label='registrationUrl' {...props}/>
            }
        </div>

        <TextFieldArea label='requirementsToRegister' {...props}/>

        <ToggleField label='hasDeadline' {...props}/>

        {props.values.hasDeadline == "on" && <FieldSingleDate label='registrationDeadline' {...props}/>}

    </Form>
)
