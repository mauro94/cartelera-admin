import React from 'react'
import PropTypes from 'prop-types'
import { withAuth } from 'Config/helper'

const PrivatePage = ({ user, logout }) => (
    <div>
        <p>Hello, {user.firstName}</p>
        <button onClick={logout}>logout</button>
    </div>
)

PrivatePage.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
}

export default withAuth(PrivatePage)