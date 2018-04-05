import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { EventsFormsIndex } from 'Presentational/events/forms/Index'
import { EventsFormsDetails } from 'Presentational/events/forms/Details'
import { EventsFormsRegistration } from 'Presentational/events/forms/Registration'
import { EventsFormsActions } from 'Presentational/events/forms/Actions'
import { history } from 'Config/helper'
import { Status } from 'Config/constants'
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { campusList, categoryList } from 'Config/Test'
import { FormMessageEditProfile } from 'Presentational/elements/Form'
import { withRouter, NavLink } from "react-router-dom"

class EditEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            registration_type: '1',
            registration_select: {
                options:  {
                    '1': <NavLink to={`/dashboard/event/${props.event.id}/details/local-registration`}>
                Registro del Sistema</NavLink>,
                '0' : <NavLink to={`/dashboard/event/${props.event.id}/details/external-registration`}>Registro Externo</NavLink>},
                selected: ('1')
            }
        }
        this.handleSelectOption = this.handleSelectOption.bind(this)
    }

    handleSelectOption(val){
        this.setState({
            registration_type: val,
            registration_select: {
                options:  {
                    '1': <NavLink to={`/dashboard/event/${this.props.event.id}/details/local-registration`}>
                Registro del Sistema</NavLink>,
                '0' : <NavLink to={`/dashboard/event/${this.props.event.id}/details/external-registration`}>Registro Externo</NavLink>},
                selected: val
            }
        })
    }

    render() {
        if (this.props.loading)
            return <p>Loading...</p>
            
        return (
            <Formik
                validationSchema={
                    Yup.object().shape({
                        name: Yup.string().required("Nombre requerido"),
                        description: Yup.string().required("Descripción requerida"),
                        location: Yup.string().required("Ubicación requerida")
                    })
                }
                initialValues={{
                    name: this.props.event.name || '',
                    description: this.props.event.description || '',
                    location: this.props.event.location || '',
                    campus: this.props.event.campus || 'MTY',
                    category: this.props.event.category || 'Congreso',
                    id: this.props.event.id || '1'
                }}
                mapPropsToValues={{ 
                    name: '',
                    description: '',
                    location: '',
                    campus: '',
                    category: '',
                    id: ''
                }}
                onSubmit={(values, action) => {
                    values.id = this.props.user.id
                    this.props.handleSubmit(values)
                    action.setSubmitting(false)
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => {
                    var component = <EventsFormsIndex 
                                    handleSubmit={ handleSubmit } 
                                    error={ this.props.error } 
                                    errors={ errors }
                                    touched={ touched } 
                                    isSubmitting={ isSubmitting } 
                                    campusList={ campusList }
                                    categoryList={ categoryList }
                                    handleFormChange={ this.handleFormChange } />
                    if (history.location.pathname.includes("details"))
                        component = <EventsFormsDetails 
                                    handleSubmit={ handleSubmit } 
                                    error={ this.props.error } 
                                    errors={ errors }
                                    touched={ touched } 
                                    isSubmitting={ isSubmitting } />
                    if (history.location.pathname.includes("registration"))
                    component = <EventsFormsRegistration 
                                handleSubmit={ handleSubmit } 
                                error={ this.props.error } 
                                errors={ errors }
                                touched={ touched } 
                                isSubmitting={ isSubmitting } 
                                handleSelectOption={ this.handleSelectOption }
                                registration_select={ this.state.registration_select }
                                handleFormChange={ this.handleFormChange }
                                eventid={ this.props.event.id }/>
                    return (
                        <React.Fragment>
                            {component}
                            <EventsFormsActions
                                    handleSubmit={ handleSubmit } 
                                    error={ this.props.error } 
                                    errors={ errors }
                                    touched={ touched } 
                                    isSubmitting={ isSubmitting } />
                            </React.Fragment>
                    )}
                }
            </Formik>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        loading: state.user.status == Status.WaitingOnServer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSubmit: profileDetails => {
            for (var key in props.user) {
                if (profileDetails.hasOwnProperty(key)) {
                    if (props.user[key] == profileDetails[key] && key != "id") {
                        delete profileDetails[key]
                    }
                }
            }
            dispatch(thunks.user.update(profileDetails))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEvent))