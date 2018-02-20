import React from 'react'
import PropTypes from 'prop-types'
 
const AppView = ({ text }) => (
    <p>
        {text}
    </p>
)

AppView.propTypes = {
    text: PropTypes.string
}

export default AppView