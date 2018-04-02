import React from 'react'
import Layout from './MainLayout'
import { EventsLink, ProfileLinks } from './Links'
import { EventsRoutes, ProfileRoute } from './Routes'

export const SponsorLayout = ({ props }) => (
    <Layout
        title={'Sponsor'}
        links={[
            <EventsLink />,
            <ProfileLinks />
        ]}
        routes={[
            <EventsRoutes />,
            <ProfileRoute />
        ]}
    />
)

export default SponsorLayout