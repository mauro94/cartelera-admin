import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Routes as RoutesComponent } from 'Config/Routes'

const mapStateToProps = state => {
    user: state.user
}

const Routes = connect(
    mapStateToProps
)(RoutesComponent)

export default withRouter(Routes)