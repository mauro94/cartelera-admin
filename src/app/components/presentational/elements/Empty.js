import React from 'react'
import EmptyEventIcon from 'Images/emptyEvents.svg'
import EmptyUsersIcon from 'Images/usersIcon.svg'
import EmptyRegistryIcon from 'Images/registreesIcon.svg'
import EmptyCategoryIcon from 'Images/categoriesIcon.svg'
import 'Style/common/warningIcon.scss'

export const EmptySponsors = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyUsersIcon} />
        <div>No existen sponsors</div>
        <div>Crea uno nuevo</div>
    </EmptyElement>
)

export const EmptyAdmins = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyUsersIcon} />
        <div>No existen admins</div>
        <div>Crea uno nuevo</div>
    </EmptyElement>
)

export const EmptyCategories = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyCategoryIcon} />
        <div>No existen categorías</div>
        <div>Crea una nueva</div>
    </EmptyElement>
)

export const EmptyRegistrees = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyRegistryIcon} />
        <div>No se han registrado personas al evento</div>
    </EmptyElement>
)

export const EmptyUpcomingEvents = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyEventIcon} />
        <div>No tienes eventos próximos</div>
        <div>Crea uno nuevo</div>
    </EmptyElement>
)

export const EmptyPastEvents = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyEventIcon} />
        <div>No tienes eventos pasados</div>
    </EmptyElement>
)

export const EmptyElement = ({ children }) => (
    <div className='warning-container'>
        <h3 className="generic-warning">{children}</h3>
    </div>
)