import React from 'react'
import { Link } from 'react-router-dom'
import { load } from 'Containers/hoc'
import { StaticButton, EmptyUpcomingEvents, EmptyPastEvents } from 'Presentational/elements'
import { Entity, history, Format } from 'Helpers/index'
import 'Style/common/pagination.scss'

const EventsList = (props) => {
    if (Entity.isEmpty(props.events)) {
        if (props.upcoming) {
            return <EmptyUpcomingEvents />
        }
        return <EmptyPastEvents />
    }

    return (
        <React.Fragment>
            <div className='container-events-all'>
                {props.events.map((event, index) => (
                    <EventGridItem
                        event={event}
                        index={index}
                        key={'item-' + index} />
                ))}
            </div>
            <hr />
            {
                props.totalPages > 1 &&
                <Pagination
                    totalPages={props.totalPages}
                    changePage={(page) => props.changeEventsPage(page)}
                    currentPage={props.currentPage} />
            }
        </React.Fragment>
    )
}

const Pagination = (props) => {
    let pages = [], first = 1, last = props.totalPages
    if (props.totalPages > 5) {
        if (props.currentPage == 1) {
            first = 1
            last = 5
        }
        else if (props.totalPages - props.currentPage < 4) {
            first = props.totalPages - 4
            last = props.totalPages
        }
        else {
            first = props.currentPage - 1
            last = first + 4
        }
    }
    for (var i = first; i <= last; i++) {
        let pageNumber = Object.freeze(i)
        pages.push(
            <StaticButton
                key={i}
                disabled={props.currentPage == i}
                type={'icon-button dark'}
                handleClick={() => props.changePage(pageNumber)}>
                {i}
            </StaticButton>
        )
    }
    return <div className='pagination'>{pages}</div>
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