import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import { Formik } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { EventFormValidations, CharacterCount } from 'Helpers/constants'
import * as EventForm from './forms/index'
import 'Style/eventDetail.scss'
import 'Style/common/segmentedForm.scss'
import { ConfirmationModal, FeedbackModal } from 'Presentational/elements'

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
        description: props.event.description|| '',
        location: props.event.location || '',
        campus: props.event.campus || 'MTY',
        category: props.event.category || 'Congreso',
        id: props.event.id || '1',
        cost: formatCost(props.event.cost) || '',
        majors: formatArray(props.event.majors) || '',
        contactName: props.event.contactName || '',
        contactEmail: props.event.contactEmail || '',
        contactPhone: props.event.contactPhone || '',
        rangeDatetime: formatToRange(props.event.startDatetime, props.event.endDatetime) || '',
        publicEvent: formatToggle(props.event.publicEvent) || 'off',
        facebookUrl: props.event.facebookUrl || '',
        twitterUrl: props.event.twitterUrl || '',
        petFriendly: formatToggle(props.event.petFriendly) || 'off'
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
                Contacto
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
        <Route
            path={'/eventos/' + props.id + '/editar/opcional'}
            render={() => <EventForm.Optional {...props} />} />
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
        handleConfirmCancel={() => {
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
        handleConfirmCancel={() => {
            props.togglePublished()
            props.onClose()
            }}
        handleCancel={() => {
            props.onClose()
            }}>
        {props.error}
    </ConfirmationModal>
)

export const FeedbackCancelled = (props) => (
    <FeedbackModal
        title={'Evento cancelado'}
        subtitle={props.event.name}
        handleOk={props.onClose}>
        <div>
            <textarea name="paragraph_text"
                cols="20"
                rows="3"
                value={props.event.cancelMessage} readOnly>
            </textarea>
        </div>
    </FeedbackModal>
)

export class ConfirmCancel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cancelMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            cancelMessage: ''
        })
    }

    handleChange(e) {
        this.setState({
            cancelMessage: e.target.value
        })
    }

    render() {
        return (
            <ConfirmationModal
                error
                title={'Cancelar evento'}
                subtitle= {this.props.event.name}
                confirmationMsg= {'El público general verá el evento como cancelado y no se podrá revertir la cancelación.'}
                lastMsg= {'cancelar evento'}
                buttonClass={'modal-confirm-cancel-button'}
                handleConfirmCancel={(cancelMessage) => {
                    this.props.handleConfirmCancel(this.state.cancelMessage)
                    this.props.onClose()
                    }}
                handleCancel={() => {
                    this.props.onClose()
                }}>
                <textarea name="paragraph_text"
                    cols="20"
                    rows="3"
                    placeholder='Mensaje de cancelación para el público (opcional)'
                    value={this.state.cancelMessage}
                    onChange={this.handleChange}>
                </textarea>
                {this.props.error}
            </ConfirmationModal>
        )
    }
}

const formatCost = (cost) => {
    return ((!cost || cost == 0) ? '0' : cost)
}

const formatToggle = (publicEvent) => {
    return ( publicEvent ? 'on' : 'off')
}

/* CREDITS A NATY */
const formatArray = (arr) => {
    let outStr = '';
    if (arr.length === 1) {
        outStr = arr[0]
    } else if (arr.length === 2) {
        let joiner = arr[1][0].toLowerCase() == 'i' ?
            ' e ' : ' y '
        outStr = arr.join(joiner)
    } else if (arr.length > 2) {
        let firstWords = arr.splice(0, arr.length - 1)
        let lastWord = arr[0][0].toLowerCase() == 'i' ?
            `e ${arr[0]}` : `y ${arr[0]}`
        outStr = `${firstWords.join(', ')} ${lastWord}`
    }
    return outStr;
}

const formatToRange = (startDatetime, endDatetime) => {
    let dateRange = {
        "startDatetime" : startDatetime,
        "endDatetime" : endDatetime
    }
    return dateRange;
}

export default load('event', EventsEdit)
