import React from 'react'

export const Button = (props) => {
    return (
        <div className={'btn' + (props.right ? ' right' : '')}>
            <button
                className={(props.type ? props.type : 'primary')
                    + (props.hide ? ' hide' : '')
                    + (props.small ? ' sm' : '')}
                disabled={props.disabled}
                onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
}

export const StaticButton = (props) => {
    return (
        <div className={'static' + (props.right ? ' right' : '')}>
            <button
                className={(props.type ? props.type : 'primary')
                    + (props.hide ? ' hide' : '')
                    + (props.small ? ' sm' : '')}
                disabled={props.disabled}
                onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
}
