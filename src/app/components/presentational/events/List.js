import React from 'react'
import { Link } from 'react-router-dom'
import { load } from 'Containers/hoc'
import { EmptyElement } from 'Presentational/elements'
import { Entity, history, Format } from 'Helpers/index'

const EventsList = (props) => {
    let emptyMsg
    if(props.upcoming) {
        emptyMsg = <div>
                    <div>No tienes eventos futuros</div>
                    <div>Crea un evento nuevo</div>
                    </div>
    }
    else {
        emptyMsg = <div>No tienes eventos pasados</div>
    }

    return <React.Fragment>
        {Entity.isEmpty(props.events) &&
            <EmptyElement>
            {emptyMsg}
            </EmptyElement>}
        {props.events.map((event, index) => (
            <EventGridItem
                event={event}
                index={index}
                key={'item-' + index} />
        ))}
    </React.Fragment>
}

const EventGridItem = ({ event, index }) => {
    return (
        <Link
            to={`/eventos/${event.id}/editar`}
            className='grid-item'>
            <div className='image'>
                <img src={event.photo}
                    className={event.cancelled ? 'cancelled' : ''} />
                <div className='grid-item-overlay'></div>
                {event.cancelled && <div className='cancelled-flag'>Cancelado</div>}
            </div>
            <div className='text'>
                <div className='event-grid-title'>{event.name}</div>
                <div className='event-grid-date'>
                    {Format.dateInSpanish(event.startDatetime)}
                </div>
                <div className='event-grid-hashtags'>
                    {event.tagNames &&
                        <Hashtags hashtag={event.tagNames} index={index} />}
                </div>
            </div>
        </Link>
    )
}

const Hashtags = ({ hashtag, index }) => {
    return (
        <React.Fragment>
            {hashtag.map(h =>
                <div onClick={() => redirect()} key={'h-' + index + '-' + h}>
                    {'#' + h}
                </div>
            )}
        </React.Fragment>
    )
}

const redirect = () => {
    history.push('/');
}

export default load('events', EventsList)