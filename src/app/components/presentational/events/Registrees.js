import React from 'react'
import { history } from 'Helpers/index'
import { ModalAlert, FeedbackModal } from 'Presentational/elements'
import { load } from 'Containers/hoc'

const ListRegistrees = (props) => (
    <div className='list'>
        {props.registrees.map(r => (
            <div className='list-item'>
                {r['user_email']}
            </div>
        ))}
    </div>
)

export default load('registrees', ListRegistrees)