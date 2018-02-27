import React from 'react'
import PropTypes from 'prop-types'
import { withAuth } from 'Config/helper'

const PrivatePage = () => (
    <p>Private page</p>
)

export default withAuth(PrivatePage)