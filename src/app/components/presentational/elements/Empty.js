import React from 'react'
import EmptyEventIcon from 'Images/emptyEvents.svg'
import EmptyRegistryIcon from 'Images/peopleIcon.svg'
import 'Style/common/emptyIcon.scss'

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
    <div className='empty-container'>
        <h3 className="generic-error">{children}</h3>
    </div>
)