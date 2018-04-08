import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Layout as UsersLayout } from 'Presentational/users'
import { Layout as ProfileLayout } from 'Presentational/profile'
import { Layout as EventsLayout } from 'Presentational/events/index'

export const DefaultRoute = props => (
    <Route exact path='/' render={() => <Redirect to='eventos' />} />
)
export const EventsRoutes = props => (
    <Route path='/eventos' render={EventsLayout} />
)
export const UsersRoute = props => (
    <Route path='/usuarios' render={UsersLayout} />
)
export const ProfileRoute = props => (
    <Route path='/perfil' render={() => <ProfileLayout user={props.user} />} />
)