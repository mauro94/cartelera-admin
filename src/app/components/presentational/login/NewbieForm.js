import React from 'react'
import { EditCurrentUser, withAuth, load } from 'Containers/index'
import { history, Session } from 'Helpers/index'
import { WelcomeMessage } from 'Presentational/elements/Form'
import { Basic as BasicForm } from 'Presentational/users/forms'
import { Button } from 'Presentational/elements'
import 'Style/gridColumns2.scss'
import 'Style/current/firstLogin.scss'

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
                <div className='login-form-container'>
                    <EditCurrentUser
                        logout
                        userToUpdate={{...this.props.currentUser, password: '', passwordConfirm: ''}}>
                        <BasicForm />
                        <LogoutButton />
                    </EditCurrentUser>
                </div>
            </div>
        )
    }
}

const LogoutButton = (props) => (
    <div className="sub-form buttons">
        <Button
            type='secondary lg'
            handleClick={() => {props.logout()} }>
            {'Cerrar sesión'}
        </Button>
    </div>
)

export default withAuth(load('currentUser', FirstLogin))