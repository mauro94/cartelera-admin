import React from 'react'
import { EmptyElement } from 'Presentational/elements'
import EmptyEventIcon from 'Images/emptyEvents.svg'
import 'Style/common/emptyIcon.scss'

export const EmptyUpcomingEvents = (props) => (
    <EmptyElement>
        <div>
            <img className='empty-icon' src={EmptyEventIcon} />
            <div>No tienes eventos próximos</div>
            <div>Crea uno nuevo</div>
        </div>
    </EmptyElement>
)

export const EmptyPastEvents = (props) => (
    <EmptyElement>
        <img className='empty-icon' src={EmptyEventIcon} />
        <div>No tienes eventos pasados</div>
    </EmptyElement>
)