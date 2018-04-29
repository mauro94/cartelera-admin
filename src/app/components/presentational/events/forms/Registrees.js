import React from 'react'
import { history } from 'Helpers/index'
import { Button } from 'Presentational/elements'
import { load } from 'Containers/hoc'

const ListRegistrees = (props) => {
    return <React.Fragment>
            <div className='large-button-container'>
                <Button
                    type='dark lg'
                    handleClick={(event) => {
                        event.preventDefault()
                        copyTextToClipboard('registree-emails-to-copy')
                    }}> 
                    Copiar lista de correos
                </Button>
            </div>

            <div className='list'>
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

            <input id='registree-emails-to-copy' className='email-format' value={props.registreeEmailsToCopy}></input>
        </React.Fragment>
}

const copyTextToClipboard = (elementId) => {
    let copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("Copy",false);
}

export default load('registrees', ListRegistrees)

