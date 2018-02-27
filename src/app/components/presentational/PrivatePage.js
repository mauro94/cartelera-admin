import React from 'react'
import PropTypes from 'prop-types'
import { withAuth } from 'Config/helper'

const PrivatePage = ({ user, logout }) => (
    <React.Fragment>
        <p>Hello, {user.firstName}</p>
        <button onClick={logout}>logout</button>
    </React.Fragment>
)

PrivatePage.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
}

export default withAuth(PrivatePage)