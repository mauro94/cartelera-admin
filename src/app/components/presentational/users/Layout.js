import React from 'react'
import { Add as AddUser, List as UserList } from 'Containers/users'
import { UserTypes } from 'Helpers/constants'
import { Route } from 'react-router-dom'
import { Pill } from 'Presentational/elements'

const UsersLayout = (props) => (
    <div className='users-page'>
        <div>
            <h1>Usuarios</h1>
            <div className='tool-bar'>
                <Pills path={props.match.url} />
                <AddUser type={getType(props.location)} />
            </div>
        </div>
        <ContentRoute {...props} />
    </div>
)

const Pills = (props) => (
    <div className='pill-bar'>
        <Pill path={props.path} hash="">
            Sponsors
        </Pill>
        <Pill path={props.path} hash="#admins">
            Admins
        </Pill>
    </div>
)

const ContentRoute = (props) => (
    <Route
        children={({ match }) => (
            <Content userType={
                getType(props.location)
            } />
        )}
    />
)

const Content = (props) => (
    <div className='content'>
        <UserList type={props.userType} />
    </div>
)

const getType = (location) => (
    location.hash == '#admins' ?
        UserTypes.Admin : UserTypes.Sponsor
)

export default UsersLayout