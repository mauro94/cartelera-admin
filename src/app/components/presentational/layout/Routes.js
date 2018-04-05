import React from 'react'
import { Route } from "react-router-dom"
import { history } from 'Config/helper'

import UsersIndex from 'Presentational/users/'
import ProfileIndex from 'Presentational/profile/Index'
import EventsIndex from 'Presentational/events/Index'
import EventDetail from 'Containers/EventDetail'

export const EventsRoutes = props => (
    <React.Fragment>
        <Route exact path="/" render={() => {
            history.replace('/dashboard/events/upcoming')
            return (
                <EventsIndex />
            )
        }} />
        <Route exact path="/dashboard" render={() => {
            history.replace('/dashboard/events/upcoming')
            return (
                <EventsIndex />
            )
        }} />
        <Route exact path="/dashboard/events" render={() => {
            history.replace('/dashboard/events/upcoming')
            return (
                <EventsIndex />
            )
        }} />
        <Route path="/dashboard/events/upcoming" component={EventsIndex} />
        <Route path="/dashboard/events/past" component={EventsIndex} />
        <Route exact path="/dashboard/event/:id" render={({ match }) => <EventDetail id={match.params.id} />} />
    </React.Fragment>
)

export const UsersRoute = props => (
    <Route path='/dashboard/usuarios' component={UsersIndex} />
)
export const ProfileRoute = props => (
    <Route path="/dashboard/perfil" render={() => <ProfileIndex {...props} />} />
)