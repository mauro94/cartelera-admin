import React from 'react'
import { EditUser, withAuth } from 'Containers'
import { history, Session, UserForms } from 'Helpers'
import { WelcomeMessage } from 'Presentational/elements/Form'

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
        require('Style/gridColumns2.scss');

        if (this.props.loading)
            return <p>Loading...</p>

        return (
            <div>
                <WelcomeMessage mail={this.props.user.email} />
                <EditUser user={this.props.user} form={UserForms.Basic} />
            </div>
        )
    }
}

export default withAuth(FirstLogin)