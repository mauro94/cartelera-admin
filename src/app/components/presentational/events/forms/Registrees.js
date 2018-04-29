import React from 'react'
import { history } from 'Helpers/index'
import { ModalAlert, FeedbackModal } from 'Presentational/elements'
import { load } from 'Containers/hoc'

const ListRegistrees = (props) => (
    <div className='list'>
        {props.registrees.map((r, index) => (
            <div className='list-item column' key={`registree-${index}`}>
                <div className='column-focus'>
                    {r['fullName']}
                </div>
                <div className='column-no-focus'>
                    {r['email']}
                </div>
            </div>
        ))}
    </div>
)

export default load('registrees', ListRegistrees)