import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Status, UserForms } from 'Config/constants'
import { Basic, Password } from 'Presentational/profile/forms'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setComponent = this.setComponent.bind(this)

        this.state = {
            form: props.form,
            component: <div>Loading...</div>,
            user: {
                firstName: props.user.firstName || '',
                lastName: props.user.lastName || '',
                office: props.user.office || '',
                phoneNumber: props.user.phoneNumber || '',
                campus: props.user.campus || 'MTY',
                id: props.user.id || '1',
                isNewbie: props.user.isNewbie
            }
        }
    }

    setComponent(formType) {
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
        return <div>Loading...</div>
    }

    handleSubmit(user) {
        for (var key in this.state.user) {
            if (user.hasOwnProperty(key)) {
                if (this.state.user[key] == user[key] && key != "id") {
                    delete user[key]
                }
            }
        }
        this.props.update(user)
    }

    componentDidMount() {
        this.setState({
            component: this.setComponent(this.state.form)
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.form != this.props.form) {
            if (nextProps.form == UserForms.Basic) {
                this.setState({
                    component: this.setComponent(UserForms.Basic)
                })
            }
            else if (nextProps.form == UserForms.Password) {
                this.setState({
                    component: this.setComponent(UserForms.Password)
                })
            }
        }
    }

    render() {
        return (<React.Fragment>{this.state.component}</React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        loading: state.user.status == Status.WaitingOnServer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        update: user => { dispatch(thunks.user.update(user)) },
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)