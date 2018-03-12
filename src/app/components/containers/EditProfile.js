import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import ProfileDetailsForm from 'Presentational/ProfileDetailsForm'
import { history } from 'Config/helper'

class EditProfile extends React.Component {
    render() {
        if (this.props.loading)
            return <p>Loading...</p>
        return <ProfileDetailsForm {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)