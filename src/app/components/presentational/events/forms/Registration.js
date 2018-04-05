import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent, SelectDate} from 'Presentational/elements/Input';
import { isEmpty } from 'Config/helper'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'
import Dropdown from 'Presentational/elements/Dropdown'
import { Persist } from 'formik-persist'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"

export const EventsFormsRegistration = ({ handleSubmit, error, errors, touched, isSubmitting, handleSelectOption, registration_select, handleFormChange, eventid }) => (
    <Form>
        {!isEmpty(error) && <p className="message-error">{error}</p>}

        <Dropdown data={registration_select}
                handleSelect={handleSelectOption}/>
                

        <Route path={"/dashboard/event/"+eventid+"/registration/local"} render={() => 
            <React.Fragment>
                <div>Mensaje Registro:</div>
                <Field name="register_message" placeholder="Mensaje" className={((touched.register_message && errors.register_message) ? 'emptyField' : 'readyField')} component={TextComponent} />
                {touched.register_message && errors.register_message && <p className="message-error">{errors.register_message}</p>}
            </React.Fragment>
        } />
        <Route path={"/dashboard/event/"+eventid+"/registration/external"} render={() => 
            <React.Fragment>
                <div>URL Registro:</div>
                <Field name="url_registration" placeholder="www.google.form.com" className={((touched.url_registration && errors.url_registration) ? 'emptyField' : 'readyField')} component={TextComponent} />
                {touched.url_registration && errors.url_registration && <p className="message-error">{errors.url_registration}</p>}
            </React.Fragment>
        } />

        <Persist name="event-details" />
    </Form>        
)
