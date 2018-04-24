import React from 'react'
import { EditCurrentUser, withAuth, load } from 'Containers/index'
import { history, Session } from 'Helpers/index'
import { WelcomeMessage } from 'Presentational/elements/Form'
import { Basic as BasicForm } from 'Presentational/users/forms'
import 'Style/gridColumns2.scss'

class FirstLogin extends React.Component {
    componentWillMount() {
        if (!Session.isNewbie()) {
            history.replace('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!Session.isNewbie()) {
            history.replace('/')
        }
    }

    render() {
        return (
            <div>
                <WelcomeMessage
                    mail={this.props.currentUser.email} />
                <EditCurrentUser
                    logout
                    userToUpdate={{...this.props.currentUser, password: '', passwordConfirm: ''}}>
                    <BasicForm />
                </EditCurrentUser>
            </div>
        )
    }
}

export default withAuth(load('currentUser', FirstLogin))