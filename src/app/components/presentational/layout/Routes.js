import React from 'react'

import { Route } from "react-router-dom"
import SponsorsIndex from 'Presentational/sponsors/Index'
import ProfileIndex from 'Presentational/profile/Index'
import EventsIndex from 'Presentational/events/Index'
import EventDetail from 'Containers/EventDetail'

export const EventsRoutes = ({ props }) => (
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

export const UsersRoute = ({ props }) => (
    <Route exact path="/dashboard/sponsors" component={SponsorsIndex} />
)
export const ProfileRoute = ({ props }) => (
    <Route path="/dashboard/profile" render={() => <ProfileIndex {...props} />} />
)