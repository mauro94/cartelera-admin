import { connect } from 'react-redux'
import React from 'react'
import 'Style/main.scss'
import PrivatePage from 'Presentational/PrivatePage'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const App = withRouter(connect(
    mapStateToProps
)(PrivatePage))

export default App