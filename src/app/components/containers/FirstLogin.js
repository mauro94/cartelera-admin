import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import ProfileDetailsForm from 'Presentational/ProfileDetailsForm'
import { history, withAuth } from 'Config/helper'

class FirstLogin extends React.Component {
    componentWillMount() {
        if (!this.props.user.isNewbie) {
            history.replace('/')
        }
    }

    render() {
        return <ProfileDetailsForm {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: profileDetails => {
            dispatch(thunks.user.update(profileDetails))
        }
    }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FirstLogin))