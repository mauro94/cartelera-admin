import { connect } from 'react-redux'
import React from 'react'
import 'Style/main.scss'
import Home from 'Containers/Home'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'

const mapStateToProps = (state) => {
    return {
        user: state.user
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
)(Home))

export default App