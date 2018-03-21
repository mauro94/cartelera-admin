import React from 'react'
import AddSponsor from 'Containers/AddSponsor'
import Sponsors from 'Containers/Sponsors'

const SponsorsPage = () => {
    return (
        <div className='sponsors-page'>
            <h1>Sponsors</h1>
            <div className='content'>
                <header>
                    <AddSponsor />
                </header>
                <Sponsors />
            </div>
        </div>
    )
}
export default SponsorsPage