import React from 'react'
import AddCallout from 'Presentational/AddCallout'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'

class AddSponsor extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <AddCallout name="pulse" add={this.props.add} />
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (email) => dispatch(thunks.user.create(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSponsor)