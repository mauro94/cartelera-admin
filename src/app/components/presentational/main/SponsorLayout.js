import React from 'react'
import Layout from './MainLayout'
import { EventsLink, ProfileLinks } from './MainLinks'
import { EventsRoutes, ProfileRoute } from './MainRoutes'

export const SponsorLayout = props => (
    <Layout
        title={'Sponsor'}
        links={[
            <EventsLink />,
            <ProfileLinks
                user={props.currentUser}
                logout={props.logout} />
        ]}
        routes={[
            <EventsRoutes />,
            <ProfileRoute user={props.currentUser} logout={props.logout} />
        ]}
    />
)

export default SponsorLayout