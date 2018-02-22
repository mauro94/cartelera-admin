import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import ProfileDetailsForm from 'Presentational/ProfileDetailsForm'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: profileDetails => {
            dispatch(thunks.user.update(profileDetails))
        }
    }
}

const FirstLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileDetailsForm)

export default FirstLogin