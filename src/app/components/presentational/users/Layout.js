import React from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import { Format } from 'Helpers/object'
import { Add as AddUser, List as UsersList } from 'Containers/users'
import { Pill } from 'Presentational/elements'
import 'Style/common/layouts/expandedList.scss'

const UsersLayout = (props) => (
    <React.Fragment>
        <Route
            exact path='/usuarios/'
            render={() => <Redirect
                to={`/usuarios/sponsors/`} />
            } />
        <Route path='/usuarios/:type' render={UsersPage} />
    </React.Fragment>
)

const UsersPage = (props) => (
    <React.Fragment>
        <Header match={props.match} />
        <div className='expanded-list'>
            <UsersList
                type={props.match.params.type} />
        </div>
    </React.Fragment>
)

const Header = (props) => {
    let type = props.match.params.type.replace(/s$/, '')
    return <div className='title'>
        <h1>{Format.capitalize(props.match.params.type)}</h1>
        <h1 className='toggle-title-filter'>
            <NavLink to={`/usuarios/${unactiveLocation(props.match)}`}>
                {` / ${unactiveLocation(props.match)}`}
            </NavLink>
        </h1>
        <AddUser type={type} />
    </div>
}

const unactiveLocation = (match) => (
    match.params.type == 'sponsors' ? 'admins' : 'sponsors'
)

export default UsersLayout