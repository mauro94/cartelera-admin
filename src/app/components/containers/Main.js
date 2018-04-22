import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { load } from 'Containers/hoc'
import { thunks } from 'Logic/actions/thunks'
import { AdminLayout, SponsorLayout } from 'Presentational/layout'
import 'Style/main.scss'
import "node_modules/react-tagging-input/src/component/scss/styles.scss";

class Main extends React.Component {
    componentWillMount() {
        switch (this.props.currentUser.userType) {
            case 'admin':
                this.setState({
                    component: <AdminLayout {...this.props} />
                })
                break;
            case 'sponsor':
                this.setState({
                    component: <SponsorLayout {...this.props} />
                })
                break;
            default:
                break;
        }
    }

    render() {
        return this.state.component
    }
}

const mapStateToProps = state => {
    return {
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