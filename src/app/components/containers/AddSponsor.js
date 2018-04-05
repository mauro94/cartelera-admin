import React from 'react'
import Callout from 'Presentational/elements/Callout'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

class AddSponsor extends React.Component {
    render() {
        return (
            <Callout name="pulse" add={this.props.add} placeholder="example@example.com" type="email" icon={ faEnvelope } />
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