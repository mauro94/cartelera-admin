import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit'

import { Status, CurrentUserActions, Entity } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { AdminLayout, SponsorLayout } from 'Presentational/layout'
import 'Style/main.scss'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            component: <Spinner name='pulse' />,
        }
        this.handleUserReceived = this.handleUserReceived.bind(this)
    }

    componentWillMount() {
        if (!Entity.isEmpty(this.props.user)) {
            this.handleUserReceived(this.props.user)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (Entity.isEmpty(this.props.user) && !Entity.isEmpty(nextProps.user)) {
            this.handleUserReceived(this.props.user)
        }
    }

    handleError() {
        this.setState({
            component: <Error message='No se ha encontrado al usuario que inició la sesión' />,
        })
    }

    handleUserReceived(user) {
        switch (user.userType) {
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
        currentUser: state.currentUser.show
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => { dispatch(thunks.user.logout()) }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main))