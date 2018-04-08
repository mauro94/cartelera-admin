import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Status, UserForms } from 'Helpers/constants'
import { Basic, Password } from 'Presentational/profile/forms'

class Edit extends React.Component {
    componentWillReceiveProps() {
        if (this.props.form != nextProps.form) {
            this.setState({
                form: nextProps.form,
                user: {
                    firstName: nextProps.user.firstName || '',
                    lastName: nextProps.user.lastName || '',
                    office: nextProps.user.office || '',
                    phoneNumber: nextProps.user.phoneNumber || '',
                    campus: nextProps.user.campus || 'MTY',
                    id: nextProps.user.id || '1',
                    isNewbie: nextProps.user.isNewbie
                }
            })
        }
    }

    getForm(formType) {
        if (formType == UserForms.Basic)
            return (
                <Basic
                    user={this.state.user}
                    handleSubmit={this.handleSubmit}
                    logout={this.props.logout} />)
        else if (formType == UserForms.Password)
            return (
                <Password
                    user={this.state.user}
                    handleSubmit={this.handleSubmit} />)
    }

    handleSubmit(user) {
        for (var key in this.props.user) {
            if (user.hasOwnProperty(key)) {
                if (this.props.user[key] == user[key] && key != "id") {
                    delete user[key]
                }
            }
        }
        this.props.update(user, this.props.match.location.includes('perfil'))
    }

    render() {
        return this.getForm(this.props.form)
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        update: user => { dispatch(thunks.user.update(user)) },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)