import React from 'react'
import PropTypes from 'prop-types'
import { withAuth } from 'Config/helper'

const PrivatePage = ({ user }) => (
    <p>Hello, {user.firstName}</p>
)

PrivatePage.propTypes = {
    user: PropTypes.object
}

export default withAuth(PrivatePage)