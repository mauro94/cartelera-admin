import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import { Formik } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import Registrees from 'Containers/events/Registrees'
import { EventFormValidations } from 'Helpers/constants'
import * as EventForm from './forms/index'
import 'Style/eventDetail.scss'
import 'Style/common/segmentedForm.scss'
import { Format } from './helper'

const EventsEdit = (props) => (
    <Router>
        <React.Fragment>
            <div className='title'>
                <div className="top-container">
                    <h1> {props.event.name}</h1>
                    {<EventForm.Actions {...props}/>}
                </div>
            </div>
            <div className='edit-event-container'>
                <Menu id={props.event.id} />
                <Form {...props}>
                    <FormRoutes id={props.event.id} />
                </Form>
            </div>
        </React.Fragment>
    </Router>
)

const Form = (props) => {
    // OMG PATRICE PLEASE WE NEED DEFAULT VALUES xoxogossipgirl
    let initialValues = {
        name: props.event.name || '',
        description: props.event.description || '',
        location: props.event.location || '',
        campus: props.event.campus || 'MTY',
        category: props.event.category || 'Congreso',
        id: props.event.id || '1',
        cost: Format.cost(props.event.cost) || '',
        majors: Format.array(props.event.majors) || '',
        languages: Format.array(props.event.languages) || '',
        prefix: props.event.prefix || '',
        contactName: props.event.contactName || '',
        contactEmail: props.event.contactEmail || '',
        contactPhone: props.event.contactPhone || '',
        rangeDatetime: Format.toRange(props.event.startDatetime, props.event.endDatetime) || '',
        publicEvent: Format.toggle(props.event.publicEvent) || 'off',
        facebookUrl: props.event.facebookUrl || '',
        twitterUrl: props.event.twitterUrl || '',
        petFriendly: Format.toggle(props.event.petFriendly) || 'off',
        registrationUrl: props.event.registrationUrl || '',
        registrationMessage: props.event.registrationMessage || '',
        registrationDeadline: props.event.registrationDeadline || '',
        hasRegistration: Format.toggle(props.event.hasRegistration) || '',
        hasDeadline: Format.toggle(props.event.hasDeadline) || '',
        requirementsToRegister: props.event.requirementsToRegister || '',
        tags: props.event.tags || '',
        photo: props.event.photo || '',
        schedule: props.event.schedule || ''
    }

    return <Formik
        enableReinitialize
        validationSchema={
            Yup.object().shape(EventFormValidations)
        }
        // initialValues={props.event}
        // mapPropsToValues={props.event}
        initialValues={initialValues}
        mapPropsToValues={initialValues}
        onSubmit={(values, action) => {
            // values.id = user.id
            props.handleSubmit(values)
            action.setSubmitting(false)
        }}>
        {(formProps) => {
            var routesWithProps = React.Children.map(props.children, child =>
                React.cloneElement(child, { ...formProps, ...props }))
            return <React.Fragment>
                {routesWithProps}
            </React.Fragment>
        }}
    </Formik>
}

const NavButton = (props) => (
    <div>
        <NavLink
            exact={props.exact}
            activeClassName='selected'
            className='navbar-button callout right'
            to={props.to}>
            {props.children}
        </NavLink>
    </div>
)

const Menu = (props) => (
    <div className='navbar'>
        <NavButton exact to={'/eventos/' + props.id + '/editar'}>
            General
        </NavButton>

        <NavButton to={'/eventos/' + props.id + '/editar/imagenes'}>
            Imágenes
        </NavButton>

        <NavButton to={'/eventos/' + props.id + '/editar/detalles'}>
            Contacto
        </NavButton>

        <NavButton to={'/eventos/' + props.id + '/editar/registro'}>
            Registro
        </NavButton>

        <NavButton to={'/eventos/' + props.id + '/editar/registrados'}>
            Lista de registrados
        </NavButton>

        <NavButton to={'/eventos/' + props.id + '/editar/opcional'}>
            Opcional
        </NavButton>

    </div>
)

const FormRoutes = (props) => (
    <div className='edit-event-content'>
        <Route
            exact
            path={'/eventos/' + props.id + '/editar'}
            render={() => <EventForm.General {...props} />} />
        <Route
            path={'/eventos/' + props.id + '/editar/detalles'}
            render={() => <EventForm.Details {...props} />} />
        <Route
            path={'/eventos/' + props.id + '/editar/imagenes'}
            render={() => <EventForm.Images {...props} />} />
        <Route
            path={'/eventos/' + props.id + '/editar/registro'}
            render={() => <EventForm.Registration {...props} />} />
        <Route
            path={'/eventos/' + props.id + '/editar/opcional'}
            render={() => <EventForm.Optional {...props} />} />
        <Route
            path={'/eventos/' + props.event.id + '/editar/registrados'}
            render={() => <Registrees event={props.event} />} />
    </div>
)

export default load('event', EventsEdit)
