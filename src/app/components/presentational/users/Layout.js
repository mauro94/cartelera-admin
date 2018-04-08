import React from 'react'
import { Add as AddUser, List as UsersList } from 'Containers/users'
import { UserTypes } from 'Helpers/constants'
import { Route, Redirect } from 'react-router-dom'
import { Pill } from 'Presentational/elements'

const UsersLayout = (props) => (
    <div className='users-page'>
        <div>
            <h1>Usuarios</h1>
            <div className='tool-bar'>
                <Pills path={props.match.url} />
                <AddUser query={props.location.search} />
            </div>
        </div>
        <Route
            exact path='/usuarios'
            render={({ match }) =>
                <Redirect to='/usuarios/sponsors/' />} />
        <Route
            path='/usuarios/:type'
            render={({ match }) =>
                <UsersList
                    type={match.params.type}
                    selectedUserId={match.params.id} />} />
    </div>
)

const Pills = (props) => (
    <div className='pill-bar'>
        <Pill path={props.path + '/sponsors'}>
            Sponsors
        </Pill>
        <Pill path={props.path + '/admins'}>
            Admins
        </Pill>
    </div>
)

export default UsersLayout