import { connect } from 'react-redux'
import React from 'react'
import 'Style/main.scss'
import HomePage from 'Presentational/HomePage'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

const App = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))

export default App