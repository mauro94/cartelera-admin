import { connect } from 'react-redux'
import React from 'react'
import 'Style/main.scss'
import AppView from 'Presentational/AppView'

const mapStateToProps = (state, ownProps) => {
    return {
        text: ownProps.match.params.filter
    }
}

const App = connect(
    mapStateToProps
)(AppView)

export default App