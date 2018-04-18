import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { categoryList, campusList } from 'Config/Test'
import { thunks } from 'Logic/actions/thunks'
import { default as EditEvent } from 'Presentational/events/Edit'
import { Entity, EventActions } from 'Helpers/index';

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.action = EventActions.Get
        this.togglePublished = this.togglePublished.bind(this)
        this.handleConfirmCancel= this.handleConfirmCancel.bind(this)
        this.textareaHandleChange = this.textareaHandleChange.bind(this)
        this.setTextarea = this.setTextarea.bind(this)
        this.state = {
            textarea: {
                description: props.event.show.description || ''
            }
        }
    }
    componentDidMount() {
        if (Entity.isEmpty(this.props.event.show) || this.props.event.show.id != this.props.id)
            this.props.getEvent(this.props.id)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id) {
            this.props.getEvent(nextProps.id)
        }
    }

    setTextarea() {
        this.setState({
            textarea: {
                description: this.props.event.show.description || ''
            }
        })
    }

    handleSubmit(values) {
        for (var key in props.event.show) {
            if (values.hasOwnProperty(key)) {
                if (props.event.show[key] == values[key] && key != "id") {
                    delete values[key]
                }
            }
        }
        this.action = EventActions.Update
        this.props.updateEvent()
    }

    togglePublished() {
        this.action = EventActions.Update
        this.props.updateEvent({
            id: this.props.event.show.id,
            published: !this.props.event.show.published
        })
    }

    handleConfirmCancel(cancelMessage) {
        this.action = EventActions.Update
        this.props.updateEvent({
            id: this.props.event.show.id,
            cancelled: true,
            cancel_message: cancelMessage
        })
    }

    textareaHandleChange(e) {
        //validation here
        this.setState({
            textarea: {
                description: e.target.textContent
            }
        })
    }

    render() {
        return (
            <EditEvent
                action={this.action}
                campusList={campusList}
                categoryList={categoryList}
                event={this.props.event.show}
                textarea={this.state.textarea}
                textareaHandleChange={this.textareaHandleChange}
                handleSubmit={this.handleSubmit}
                togglePublished={this.togglePublished}
                handleConfirmCancel={this.handleConfirmCancel}
                hide
                onSuccess={()=>this.setTextarea()}
                reducer={{
                    status: this.props.event.status,
                    action: this.props.event.action,
                    error: this.props.event.error
                }}
                update={this.props.updateEvent}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvent: id => { dispatch(thunks.event.get(id)) },
        updateEvent: event => { dispatch(thunks.event.update(event)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))
