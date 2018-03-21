import React from 'react'
import AddSponsor from 'Containers/AddSponsor'
import Sponsors from 'Containers/Sponsors'

const SponsorsPage = () => {
    return (
        <div className='sponsors-page'>
            <header>
                <h1>Sponsors</h1>
            </header>
            <div className='content'>
                <header className='secondary'>
                    <AddSponsor />
                </header>
                <Sponsors />
            </div>
        </div>
    )
}
export default SponsorsPage