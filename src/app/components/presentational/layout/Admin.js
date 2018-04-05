import React from 'react'
import Layout from './MainLayout'
import { UsersLink, CategoriesLink, EventsLink, ProfileLinks } from './Links'
import { UsersRoute, CategoriesRoute, EventsRoutes, ProfileRoute } from './Routes'

export const AdminLayout = props => (
    <Layout
        title={'SuperAdmin'}
        links={[
            <UsersLink />,
            <CategoriesLink />,
            <EventsLink />,
            <ProfileLinks name={props.user.firstName} logout={props.logout} />
        ]}
        routes={[
            <EventsRoutes />,
            <UsersRoute />,
            <ProfileRoute {...props} />,
            <CategoriesRoute />
        ]}
    />
)

export default AdminLayout