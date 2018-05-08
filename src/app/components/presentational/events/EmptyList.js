import React from 'react'
import { ArcherElement } from 'react-archer'
import { EmptyElement } from 'Presentational/elements'
import EmptyEventIcon from 'Images/emptyEvents.svg'
import 'Style/events/emptyList.scss'

export const EmptyUpcomingEvents = (props) => (
    <div className='empty-events'>
        <img className='empty-event-icon' height="50" src={EmptyEventIcon} />
        <EmptyElement>
            <div>
                <div>No tienes eventos próximos</div>
                <ArcherElement
                    id='create-event-msg'
                    relations={[{
                        from: { anchor: 'right' },
                        to: { anchor: 'bottom', id: 'create-event-btn' }
                    }]}>
                    <div>Crea uno nuevo</div>
                </ArcherElement>
            </div>
        </EmptyElement>
    </div>
)

export const EmptyPastEvents = (props) => (
    <EmptyElement>
        <div>No tienes eventos pasados</div>
    </EmptyElement>
)