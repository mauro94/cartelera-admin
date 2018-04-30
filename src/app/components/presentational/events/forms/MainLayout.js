import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Formik, Form } from 'formik'
import Yup from 'yup'
import Registrees from 'Containers/events/Registrees'
import { EventFormValidations } from 'Helpers/constants'
import * as EventFormSection from './index'
import { eventInitialValues } from './helper'
import 'Style/eventDetail.scss'
import 'Style/common/segmentedForm.scss'
import { SubmitButton } from 'Presentational/elements/Form'

export const EventForm = (props) => {
    let initialValues = props.event ? props.event : eventInitialValues
    return <Formik
        validationSchema={
            Yup.object().shape(EventFormValidations)
        }
        initialValues={initialValues}
        mapPropsToValues={initialValues}
        onSubmit={(values, action) => {
            props.handleSubmit(values)
            action.setSubmitting(false)
        }}>
        {(formProps) => {
            var routesWithProps = React.Children.map(props.children, child =>
                React.cloneElement(child, { ...formProps, ...props }))
            return (
                <Form>
                    {routesWithProps}
                    {!location.pathname.includes('registrados') && <div className="form-field buttons">
                        <SubmitButton {...formProps}>
                            {props.event ? 'Actualizar' : 'Crear'}
                        </SubmitButton>
                    </div>}
                </Form>
            )
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

export const EventFormNav = (props) => {
    let path = props.edit ? `${props.id}/editar` : 'nuevo'
    return (
        <div className='navbar'>
            <NavButton exact to={`/eventos/${path}`}>
                General
            </NavButton>

            <NavButton to={`/eventos/${path}/imagenes`}>
                Imágenes
            </NavButton>

            <NavButton to={`/eventos/${path}/detalles`}>
                Contacto
            </NavButton>

            <NavButton to={`/eventos/${path}/registro`}>
                Registro
            </NavButton>

            {props.edit &&
                <NavButton to={`/eventos/${path}/registrados`}>
                    Lista de registrados
            </NavButton>}

            <NavButton to={`/eventos/${path}/opcional`}>
                Opcional
            </NavButton>

        </div>
    )
}

export const EventFormRoutes = (props) => {
    let path = props.edit ? `${props.id}/editar` : 'nuevo'
    let { edit, id, ...routeProps } = props
    return (
        <div className='edit-event-content'>
            <Route
                exact
                path={`/eventos/${path}`}
                render={() => <EventFormSection.General {...routeProps} />} />
            <Route
                path={`/eventos/${path}/detalles`}
                render={() => <EventFormSection.Details {...routeProps} />} />
            <Route
                path={`/eventos/${path}/imagenes`}
                render={() => <EventFormSection.Images {...routeProps} />} />
            <Route
                path={`/eventos/${path}/registro`}
                render={() => <EventFormSection.Registration {...routeProps} />} />
            <Route
                path={`/eventos/${path}/opcional`}
                render={() => <EventFormSection.Optional {...routeProps} />} />
            {props.edit && <Route
                path={`/eventos/${path}/registrados`}
                render={() => <Registrees event={props.event} />} />}
        </div>
    )
}