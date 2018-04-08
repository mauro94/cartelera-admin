import React from 'react'
import { connect } from 'react-redux'
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
    render() {
        return (
            <EditEvent
                action={EventActions.Get}
                event={this.props.event.show}
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
