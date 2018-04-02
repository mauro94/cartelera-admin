import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Config/constants'
import { AdminLayout, SponsorLayout } from 'Presentational/layout'
import 'Style/main.scss'

var Spinner = require('react-spinkit');

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            component: <Spinner name="pulse" />
        }
    }

    componentWillMount() {
        if (!this.props.loading) {
            switch (this.props.user.userType) {
                case "admin":
                    this.setState({
                        component: <AdminLayout {...this.props} />
                    })
                    break;
                case "sponsor":
                    this.setState({
                        component: <SponsorLayout {...this.props} />
                    })
                    break;
                default:
                    // Solicitante
                    break;
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.component}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.current,
        loading: state.user.status == Status.WaitingOnServer
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
