import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { categoryList, campusList } from 'Config/Test'
import { thunks } from 'Logic/actions/thunks'
import { default as EditEvent } from 'Presentational/events/Edit'
import { Entity, EventActions } from 'Helpers/index';

class Edit extends React.Component {
    componentDidMount() {
        if (Entity.isEmpty(this.props.event.show))
            this.props.getEvent(this.props.id)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id) {
            this.props.getEvent(nextProps.id)
        }
    }
    handleSubmit(values) {
        for (var key in props.event.show) {
            if (values.hasOwnProperty(key)) {
                if (props.event.show[key] == values[key] && key != "id") {
                    delete values[key]
                }
            }
        }
        this.props.updateEvent()
    }
    render() {
        return (
            <EditEvent
                action={EventActions.Get}
                campusList={campusList}
                categoryList={categoryList}
                event={this.props.event.show}
                handleSubmit={this.handleSubmit}
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