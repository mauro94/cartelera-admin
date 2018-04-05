import React from 'react'
import { EditUser } from 'Containers/users'
import { history, isCurrentUserNewbie, withAuth } from 'Config/helper'
import { UserForms } from 'Config/constants'
import { WelcomeMessage } from 'Presentational/elements/Form'

class FirstLogin extends React.Component {
    componentWillMount() {
        if (!isCurrentUserNewbie()) {
            history.replace('/dashboard')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!isCurrentUserNewbie()) {
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