import React from 'react'
import { EditUser, withAuth } from 'Containers/index'
import { history, Session, UserForms } from 'Helpers'
import { WelcomeMessage } from 'Presentational/elements/Form'
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
                <WelcomeMessage mail={this.props.user.email} />
                <EditUser current user={this.props.currentUser} form={UserForms.Basic} />
            </div>
        )
    }
}

export default withAuth(FirstLogin)