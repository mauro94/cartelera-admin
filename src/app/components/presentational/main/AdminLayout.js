import React from 'react'
import Layout from './MainLayout'
import { UsersLink, CategoriesLink, EventsLink, ProfileLinks } from './MainLinks'
import { UsersRoute, CategoriesRoute, EventsRoutes, ProfileRoute } from './MainRoutes'

export const AdminLayout = props => (
    <Layout
        title={'SuperAdmin'}
        links={[
            <EventsLink />,
            <CategoriesLink />,
            <UsersLink />,
            <ProfileLinks
                user={props.currentUser}
                logout={props.logout} />
        ]}
        routes={[
            <EventsRoutes />,
            <UsersRoute />,
            <ProfileRoute user={props.currentUser} logout={props.logout} />,
            <CategoriesRoute />
        ]}
    />
)

export default AdminLayout