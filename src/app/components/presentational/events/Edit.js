import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import { Formik } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { EventFormValidations, CharacterCount } from 'Helpers/constants'
import * as EventForm from './forms/index'
import 'Style/eventDetail.scss'
import 'Style/common/segmentedForm.scss'
import { ConfirmationModal } from 'Presentational/elements'

const EventsEdit = (props) => (
    <Router>
        <React.Fragment>
            <div className='title'>
                <div className="event-top-container">
                    <h1> {props.event.name}</h1>
                    {<EventForm.Actions {...props}/>}
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
                className='navbar-button callout right'
                to={'/eventos/' + props.id + '/editar'}>
                General
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button callout right'
                to={'/eventos/' + props.id + '/editar/imagenes'}>
                Imágenes
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button callout right'
                to={'/eventos/' + props.id + '/editar/detalles'}>
                Detalle
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button callout right'
                to={'/eventos/' + props.id + '/editar/registro/local'}>
                Registro
            </NavLink>
        </div>
        <div>
            <NavLink
                activeClassName='selected'
                className='navbar-button callout right'
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

export const ConfirmPublish = (props) => (
    <ConfirmationModal
        error
        title={'Confirmar publicación'}
        subtitle= {props.event.name}
        confirmationMsg= {'El evento será visible para el público general'}
        lastMsg= {'confirmar publicación'}
        buttonClass={'modal-confirm-button'}
        handleConfirm={() => {
            props.togglePublished()
            props.onClose()
            }}
        handleCancel={() => {
            props.onClose()
        }}>
        {props.error}
    </ConfirmationModal>
)

export const ConfirmUnpublish = (props) => (
    <ConfirmationModal
        error
        title={'Quitar de vista pública'}
        subtitle= {props.event.name}
        confirmationMsg= {'El evento dejará de ser visible para el público general'}
        lastMsg= {'quitar de vista pública'}
        buttonClass={'modal-confirm-button'}
        handleConfirm={() => {
            props.togglePublished()
            props.onClose()
            }}
        handleCancel={() => {
            props.onClose()
            }}>
        {props.error}
    </ConfirmationModal>
)

export const ConfirmCancel = (props) => (
    <ConfirmationModal
        error
        title={'Cancelar evento'}
        subtitle= {props.event.name}
        confirmationMsg= {'El público general verá el evento como cancelado y no se podrá revertir la cancelación.'}
        lastMsg= {'cancelar evento'}
        buttonClass={'modal-confirm-cancel-button'}
        handleConfirm={() => {
            props.toggleCancelled()
            props.onClose()
            }}
        handleCancel={() => {
            props.onClose()
        }}>
        {props.error}
    </ConfirmationModal>
)

export default load('event', EventsEdit)
