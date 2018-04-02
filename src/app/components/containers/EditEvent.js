import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { EventsFormsIndex } from 'Presentational/events/forms/Index'
import { EventsFormsDetails } from 'Presentational/events/forms/Details'
import { history } from 'Config/helper'
import { Status } from 'Config/constants'
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { campusList, categoryList } from 'Config/Test'
import { FormMessageEditProfile } from 'Presentational/elements/Form'

class EditEvent extends React.Component {
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
                                    categoryList={ categoryList } />
                    if (history.location.pathname.includes("details"))
                        component = <EventsFormsDetails 
                                    handleSubmit={ handleSubmit } 
                                    error={ this.props.error } 
                                    errors={ errors }
                                    touched={ touched } 
                                    isSubmitting={ isSubmitting } />
                    return (
                        <React.Fragment>
                            {component}
                            <div className="event-actions-container">
                    
                            </div>
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
        },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)