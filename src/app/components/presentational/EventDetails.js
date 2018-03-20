import React from 'react'
import Dropdown from 'Presentational/Dropdown'

const EventDetails = ({ event }) => {

    var data = {'0': 'Pública', '1' : 'No pública'}

    return (
        <React.Fragment>
            <h1> {event.name} </h1>
            <div className='modifyButtons'>
                <span className='label'>Visible en la vista </span>
                <span> <Dropdown data={data}/> </span>
            </div>
        </React.Fragment>
    )
}
export default EventDetails