import React from 'react'
import { connect } from 'react-redux'
import { Entity } from 'Helpers/object'
import { thunks } from 'Logic/actions/thunks'
import ShowRegistrees from 'Presentational/events/Registrees'
import { RegistreeActions } from 'Helpers/index';

class Registrees extends React.Component {
    componentWillMount() {
        if (Entity.isEmpty(this.props.registree.all)) {
            this.props.getRegistrees(this.props.event.id)
        }
    }

    render() {
        return (
            <ShowRegistrees
                event={this.props.event}
                registrees={this.props.registree.all}
                hide
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
    registree: state.registree
})

const mapDispatchToProps = (dispatch) => ({
    getRegistrees: (id) => {
        dispatch(thunks.registree.allFromEventId(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Registrees)