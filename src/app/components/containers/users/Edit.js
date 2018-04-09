import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { Status, UserForms } from 'Helpers/constants'
import { Basic, Password } from 'Presentational/profile/forms'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillMount() {
        this.setState({
            form: this.props.form,
            user: {
                firstName: this.props.user.firstName || '',
                lastName: this.props.user.lastName || '',
                office: this.props.user.office || '',
                phoneNumber: this.props.user.phoneNumber || '',
                campus: this.props.user.campus || 'MTY',
                id: this.props.user.id || '1',
                isNewbie: this.props.user.isNewbie
            }
        })
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
        let updatedUser = { id: this.props.user.id }
        for (var key in this.props.user) {
            if (user.hasOwnProperty(key)) {
                if (this.props.user[key] != user[key] && key != "id") {
                    updatedUser[key] = user[key]
                }
            }
        }
        this.props.update(updatedUser, this.props.current)
    }
    render() {
        return this.getForm(this.props.form)
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: (user, isCurrent) => { dispatch(thunks.user.update(user, isCurrent)) },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)