import React from 'react'
import { connect } from 'react-redux'
import { UserActions } from 'Helpers/constants'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import { EditSucceeded, EditFailed } from 'Presentational/users/Edit'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    componentWillMount() {
        this.setState({
            user: {
                firstName: this.props.userToUpdate.firstName || '',
                lastName: this.props.userToUpdate.lastName || '',
                office: this.props.userToUpdate.office || '',
                phoneNumber: this.props.userToUpdate.phoneNumber || '',
                campus: this.props.userToUpdate.campus || 'MTY',
                id: this.props.userToUpdate.id,
                isNewbie: this.props.userToUpdate.isNewbie
            }
        })
    }
    handleError() {
        ModalAlert({
            modal: EditFailed,
            type: this.props.type,
            user: this.email,
            error: this.props.user.error
        })
    }
    handleSubmit(user) {
        let updatedUser = { id: this.props.userToUpdate.id }
        for (var key in this.props.userToUpdate) {
            if (user.hasOwnProperty(key)) {
                if (this.props.userToUpdate[key] != user[key] && key != "id") {
                    updatedUser[key] = user[key]
                }
            }
        }
        this.props.update(updatedUser)
    }
    handleSuccess() {
        ModalAlert({
            modal: EditSucceeded, type: this.props.type,
            user: this.props.user.show
        })
    }
    render() {
        const { children } = this.props;
        let childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                action: (UserActions.Update),
                handleSubmit: this.handleSubmit,
                reducer: {
                    status: this.props.user.status,
                    action: this.props.user.action,
                    error: this.props.user.error
                },
                user: this.state.user,
                onSuccess: this.handleSuccess,
                onError: this.handleError
            }));
        return (childrenWithProps)
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: (user) => {
            dispatch(thunks.user.update(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)