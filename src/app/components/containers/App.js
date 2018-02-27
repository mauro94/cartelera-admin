import { connect } from 'react-redux'
import React from 'react'
import 'Style/main.scss'
import PrivatePage from 'Presentational/PrivatePage'
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
)(PrivatePage))

export default App