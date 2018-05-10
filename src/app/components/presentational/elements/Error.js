import React from 'react'
import PageNotFoundIcon from 'Images/pageNotFound.svg'
import ServerErrorIcon from 'Images/serverError.svg'
import 'Style/common/warningIcon.scss'

export const ServerError = (props) => (
    <ErrorElement>
        <img className='error-icon' src={ServerErrorIcon} />
        <div>{props.errorMessage}</div>
    </ErrorElement>
)

export const PageNotFound = (props) => (
    <ErrorElement>
        <img className='error-icon' src={PageNotFoundIcon} />
        <div>Esta página no existe</div>
    </ErrorElement>
)

export const ErrorElement = ({ children }) => (
    <div className='warning-container'>
        <h3 className='generic-warning'>{children}</h3>
    </div>
)