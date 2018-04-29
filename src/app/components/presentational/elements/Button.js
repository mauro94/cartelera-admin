import React from 'react'

const Button = (props) => {
    return (
        <div className={'btn' + (props.right ? ' right' : '')}>
            <Button
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

export default Button