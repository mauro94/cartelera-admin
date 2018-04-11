import React from 'react'
import { EditUser, withAuth } from 'Containers/index'
import { history, Session } from 'Helpers'
import { WelcomeMessage } from 'Presentational/elements/Form'
import { Basic as BasicForm } from 'Presentational/users/forms'
import 'Style/gridColumns2.scss'

class FirstLogin extends React.Component {
    componentWillMount() {
        if (!Session.isNewbie()) {
            history.replace('/dashboard')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!Session.isNewbie()) {
            history.replace('/dashboard')
        }
    }

    render() {
        return (
            <div>
                <WelcomeMessage
                    mail={this.props.user.email} />
                <EditUser
                    current
                    logout
                    user={this.props.currentUser}
                    form={BasicForm} />
            </div>
        )
    }
}

export default withAuth(FirstLogin)