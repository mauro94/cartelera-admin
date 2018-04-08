import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { List as EventsList } from 'Containers/events'
import 'Style/eventsMenuLayout.scss'

const AllEvents = () => (
    <div className='grid-container container-events'>
        <div className='events-title'>
            <h1 id='event-title'>Administrar Eventos</h1>
        </div>
        <Links />
        <Routes />
    </div>
)

const Routes = () => (
    <div className='container-events-all'>
        <Route
            path='/eventos'
            render={({ location }) => <EventsList query={location.search} />} />
    </div>
)

const Links = () => (
    <div className='container-events-filter-1'>
        <div className='filter-link filter-link-1' id='filter-link-1'>
            <NavLink
                activeClassName='filter-selected'
                to={{ search: '?tipo=proximos' }}
                isActive={({ location }) => location.search == ('')
                    || location.search.includes('proximos')}>
                Próximos
            </NavLink>
        </div>
        <div className='filter-link filter-link-2' id='filter-link-2'>
            <NavLink
                activeClassName='filter-selected'
                to={{ search: '?tipo=pasados' }}
                isActive={({ location }) => location.search.includes('pasados')}>
                Pasados
            </NavLink>
        </div>
    </div>
)

export default AllEvents