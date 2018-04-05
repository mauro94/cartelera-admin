import React from 'react'
import Callout from 'Presentational/elements/Callout'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'

class AddUser extends React.Component {
    render() {
        return (
            <Callout name="pulse" add={this.props.add} type={this.props.type} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)