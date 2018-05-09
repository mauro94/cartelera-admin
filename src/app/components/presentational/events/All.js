import React from 'react'
import { Route, NavLink, Link } from 'react-router-dom'
import { List as EventsList } from 'Containers/events'
import { Plus } from 'Images/plus'
import { Button } from 'Presentational/elements'
import 'Style/eventsMenuLayout.scss'

const AllEvents = () => (
    <React.Fragment>
        <div className='title'>
            <div className='top-container'>
                <div className='header-stick'>
                    <h1>{`Eventos ${location.search.includes('pasados') ? 'pasados ' : 'próximos '}`}</h1>
                    <h1 className='toggle-title-filter'>
                        <NavLink to={{ search: '?tipo=' + (location.search.includes('pasados') ? 'próximos' : 'pasados') }}>/{location.search.includes('pasados') ? ' próximos' : ' pasados'}
                        </NavLink>
                    </h1>
                </div>
                <div className='actions-container'>
                    <Link to='/eventos/nuevo'>
                        <div className='add'>
                            <Button type='icon-button primary'>
                                <div className='plus'>
                                    <Plus />
                                </div>
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Routes />
    </React.Fragment>
)

const Routes = () => (
    <Route
        path='/eventos'
        render={({ location }) => <EventsList query={location.search} />} />
)

const Links = () => (
    <div className='container-events-filter-1'>
        <div className='filter-link filter-link-1' id='filter-link-1'>
            <NavLink
                activeClassName='filter-selected'
                to={{ search: '?tipo=proximos' }}
                isActive={(_, location) => location.search == ('')
                    || location.search.includes('proximos')}>
                Próximos
            </NavLink>
        </div>
        <div className='filter-link filter-link-2' id='filter-link-2'>
            <NavLink
                activeClassName='filter-selected'
                to={{ search: '?tipo=pasados' }}
                isActive={(_, location) => location.search.includes('pasados')}>
                Pasados
            </NavLink>
        </div>
    </div>
)

export default AllEvents