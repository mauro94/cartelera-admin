import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import ProfileDetailsForm from 'Presentational/ProfileDetailsForm'
import { history, withAuth, isCurrentUserNewbie } from 'Config/helper'

class FirstLogin extends React.Component {
    componentWillMount() {
        if (!isCurrentUserNewbie()) {
            history.replace('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!isCurrentUserNewbie()) {
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
        },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FirstLogin))