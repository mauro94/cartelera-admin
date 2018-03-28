import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/fontawesome-free-regular'
import { Tag, TagIcon } from 'Presentational/elements/Tag'

const SponsorsList = ({ sponsors }) => (
    <div className='list'>
        {sponsors.map((s, i) =>
            <SponsorRow sponsor={s} key={'sponsor-' + s.id + '-' + i} />
        )}
    </div>
)

const SponsorRow = ({ sponsor }) => (
    <div key={'sponsor-' + sponsor.id} className='list-item'>
        <div className='list-item-data'>{sponsor.email || ''}</div>
        <div className='list-item-data'>{sponsor.firstName || ''} {sponsor.lastName || ''}</div>
        <div className='list-item-data tags'>
            {sponsor.disabled &&
                <div className='list-item-data orange'><Tag child={'Inactivo'} /></div>
            }
            {sponsor.isNewbie &&
                <div className='list-item-data purple'><Tag child={'Nuevo'} /></div>
            }
            {(sponsor.userType == 'admin') &&
                <div className='list-item-data blue'><Tag child={'Admin'} /></div>
            }
        </div>
        <div className='list-item-data edit'>
            <TagIcon child={<FontAwesomeIcon icon={faEdit} />} />
        </div>
    </div>
)


export default SponsorsList