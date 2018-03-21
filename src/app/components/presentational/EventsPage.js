import React from 'react';
import { isEmpty, formatDate } from 'Config/helper'
import { Link } from 'react-router-dom'

let lastRow, rowHeight;

const EventsPage = ({ events }) => {
    lastRow = [1, 1, 1, 1]
    rowHeight = 6
    return (
        <React.Fragment>
            {events.map((event, index) => (
                <EventGridItem
                    event={event}
                    index={index}
                    key={"item-" + index} />
            ))}
        </React.Fragment>
    )
}

const EventGridItem = ({ event, index }) => {
    event.hashtag = ['code', 'hack', 'business']
    return (
        <Link
            to={'/dashboard/event/' + event.id}
            className={"grid-item"}
            style={gridItemArea(index)}>
            <div className="image">
                <img src={event.photo}
                    className={event.cancelled ? 'cancelled' : ''} />
                <div className='grid-item-overlay'></div>
                {event.cancelled && <div className="cancelled-flag">Cancelado</div>}
            </div>
            <div className="text">
                <div className="event-grid-title">{event.name}</div>
                <div className="event-grid-date">{formatDate(event.startDate)}</div>
                <div className="event-grid-hashtags">
                    {event.hashtag &&
                        <Hashtags hashtag={event.hashtag} index={index} />}
                </div>
            </div>
        </Link>
    )
}

const Hashtags = ({ hashtag, index }) => {
    return (
        <React.Fragment>
            {hashtag.map(h =>
                <Link to='/' key={"h-" + index + "-" + h}>
                    {"#" + h}
                </Link>
            )}
        </React.Fragment>
    )
}

const gridItemArea = (index) => {
    let column = (index % 4) + 1
    let oldRow = lastRow[index%4];
    lastRow[index%4] += rowHeight;
    return {
        gridRow: oldRow + " / " + lastRow[index%4],
        gridColumn: column + " / " + column
    }
}


export default EventsPage