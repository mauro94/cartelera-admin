import React from 'react'
import { history } from 'Helpers/index'
import { ClipboardButton, EmptyRegistrees } from 'Presentational/elements'
import { load } from 'Containers/hoc'
import { Entity } from 'Helpers/index';

const ListRegistrees = (props) => {
    if (Entity.isEmpty(props.registrees)) {
        return <EmptyRegistrees />
    }
    return <React.Fragment>
        {!Entity.isEmpty(props.registrees) && <ClipboardButton buttonText="Copiar lista de correos"></ClipboardButton>}

        <div className='list long'>
            {props.registrees.map((r, index) => (
                <div className='list-item column' key={`registree-${index}`}>
                    <div className='column-focus'>
                        {r['fullName']}
                    </div>
                    <div className='column-no-focus email'>
                        {r['email']}
                    </div>
                </div>
            ))}
        </div>

        <textarea id='registree-emails-to-copy' className='email-format' rows='5' value={props.registreeEmailsToCopy}>
        </textarea>


    </React.Fragment>
}

export default load('registrees', ListRegistrees)

