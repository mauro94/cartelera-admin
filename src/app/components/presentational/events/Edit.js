import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import { Formik } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { EventFormValidations, CharacterCount } from 'Helpers/constants'
import * as EventForm from './forms/index'
import 'Style/eventDetail.scss'
import 'Style/common/segmentedForm.scss'

const EventsEdit = (props) => (
    <Router>
        <React.Fragment>
            <div className='title'>
                <div className="event-top-container">
                    <h1> {props.event.name}</h1>
                    <EventForm.Actions {...props} />
                </div>
            </div>
            <div className='edit-event-container'>
                <Menu id={props.event.id} />
                <Form {...props}>
                    <Routes id={props.event.id} />
                </Form>
            </div>
        </React.Fragment>
    </Router>
)

const Form = (props) => {
    let initialValues = {
        name: props.event.name || '',
        description: props.event.description || '',
        location: props.event.location || '',
        campus: props.event.campus || 'MTY',
        category: props.event.category || 'Congreso',
        id: props.event.id || '1'
    }

    return <Formik
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
            return (
                <React.Fragment>
                    {routesWithProps}
                </React.Fragment>
            )
        }}
    </Formik>
}

const Menu = (props) => (
    <div className='navbar'>
        <div>
            <NavLink
                exact
                activeClassName='selected'
                className='navbar-button'
                to={'/eventos/' + props.id + '/editar'}>
                General
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button'
                to={'/eventos/' + props.id + '/editar/imagenes'}>
                Imágenes
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button'
                to={'/eventos/' + props.id + '/editar/detalles'}>
                Detalle
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button'
                to={'/eventos/' + props.id + '/editar/registro/local'}>
                Registro
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button'
                to={'/eventos/' + props.id + '/editar/opcional'}>
                Opcional
            </NavLink>
        </div>
    </div>
)

const Routes = (props) => (
    <div className='edit-event-content'>
        <Route
            exact
            path={'/eventos/' + props.id + '/editar'}
            render={() => <EventForm.General {...props} characterCount={CharacterCount} />} />
        <Route
            path={'/eventos/' + props.id + '/editar/detalles'}
            render={() => <EventForm.Details {...props} />} />
        <Route
            path={'/eventos/' + props.id + '/editar/registro'}
            render={() => <EventForm.Registration {...props} eventid={props.id} />} />
    </div>
)

export default load('event', EventsEdit)
