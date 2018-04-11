import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserTypes } from 'Helpers/constants'
import { Add as AddUser, List as UsersList } from 'Containers/users'
import { Pill } from 'Presentational/elements'
import 'Style/users/layout.scss'

const getType = (params) => (
    params.type.includes(UserTypes.Admin) ?
        UserTypes.Admin : UserTypes.Sponsor
)

const UsersLayout = (props) => (
    <div className='users-page'>
        <Route
            exact path='/usuarios/'
            render={() => <Redirect
                to={`/usuarios/sponsors/`} />
            } />
        <Route path='/usuarios/:type' render={UsersPage} />
    </div>
)

const UsersPage = (props) => (
    <React.Fragment>
        <Header match={props.match} />
        <div className='content'>
            <UsersList
                type={props.match.params.type} />
        </div>
    </React.Fragment>
)

const Header = (props) => (
    <div>
        <h1>Usuarios</h1>
        <div className='tool-bar'>
            <Pills />
            <AddUser type={getType(props.match.params)} />
        </div>
    </div>
)

const Pills = (props) => (
    <div className='pill-bar'>
        <Pill path={'/usuarios/sponsors'}>
            Sponsors
        </Pill>
        <Pill path={'/usuarios/admins'}>
            Admins
        </Pill>
    </div>
)

export default UsersLayout