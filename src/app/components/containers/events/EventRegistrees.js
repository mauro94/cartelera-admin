import React from 'react'
import { connect } from 'react-redux'
import { Entity } from 'Helpers/object'
import { thunks } from 'Logic/actions/thunks'
import ListRegistrees from 'Presentational/events/forms/Registrees'
import { RegistreeActions } from 'Helpers/index';

class Registrees extends React.Component {
    constructor(props) {
        super(props)
        this.createRegistreeEmailsToCopy = this.createRegistreeEmailsToCopy.bind(this)
        this.state = {
            registreeEmailsToCopy: ''
        }
    }
    componentWillMount() {
        if (Entity.isEmpty(this.props.registree.all) ||
            this.props.registree.eventId != this.props.event.id) {
            this.props.getRegistrees(this.props.event.id)
            this.setState({
                registreeEmailsToCopy: ''
            })
        }
        else {
            this.createRegistreeEmailsToCopy()
        }
    }

    createRegistreeEmailsToCopy() {
        let emails = this.props.registree.all.map(e => e.email)
        let result = emails.join(';\n')
        this.setState({
            registreeEmailsToCopy: result
        })
    }

    render() {
        return (
            <ListRegistrees
                registreeEmailsToCopy={this.state.registreeEmailsToCopy}
                event={this.props.event}
                registrees={this.props.registree.all}
                hide
                onSuccess={()=>this.createRegistreeEmailsToCopy()}
                reducer={{
                    status: this.props.registree.status,
                    action: this.props.registree.action,
                    error: this.props.registree.error
                }}
                action={RegistreeActions.All} />
        )
    }
}

const mapStateToProps = (state) => ({
    registree: state.registree,
    event: state.event.show
})

const mapDispatchToProps = (dispatch) => ({
    getRegistrees: (id) => {
        dispatch(thunks.registree.allFromEventId(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Registrees)