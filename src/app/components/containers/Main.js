import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { load } from 'Containers/hoc'
import { thunks } from 'Logic/actions/thunks'
import { AdminLayout, SponsorLayout } from 'Presentational/layout'
import 'Style/main.scss'
import "node_modules/react-tagging-input/src/component/scss/styles.scss";

class Main extends React.Component {
    render() {
        if (this.props.currentUser.show.userType == 'admin') {
            return (
                <AdminLayout
                    currentUser={this.props.currentUser.show}
                    logout={this.props.logout} />
            )
        }
        return (
            <SponsorLayout 
                currentUser={this.props.currentUser.show}
                logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default load('currentUser', withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)))