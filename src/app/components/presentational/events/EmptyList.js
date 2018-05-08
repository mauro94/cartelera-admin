import React from 'react'
import { EmptyElement } from 'Presentational/elements'
import EmptyEventIcon from 'Images/emptyEvents.svg'
import 'Style/events/emptyList.scss'

export const EmptyUpcomingEvents = (props) => (
    <div className='empty-events'>
        <img className='empty-event-icon' height="50" src={EmptyEventIcon} />
        <EmptyElement>
            <div>
                <div>No tienes eventos próximos</div>
                <div>Crea uno nuevo</div>
            </div>
        </EmptyElement>
    </div>
)

export const EmptyPastEvents = (props) => (
    <EmptyElement>
        <div>No tienes eventos pasados</div>
    </EmptyElement>
)