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
            <ProfileLinks name={props.currentUser.firstName} logout={props.logout} />
        ]}
        routes={[
            <EventsRoutes />,
            <UsersRoute />,
            <ProfileRoute user={props.currentUser} />,
            <CategoriesRoute />
        ]}
    />
)

export default AdminLayout