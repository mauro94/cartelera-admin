import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn, isEmpty } from 'Config/helper'
import { Status } from 'Config/constants'
import AdminLayout from 'Presentational/AdminLayout'
import SponsorLayout from 'Presentational/SponsorLayout'
import 'Style/main.scss'

var Spinner = require('react-spinkit');

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            component: <Spinner name="pulse" />
        }
    }

    // componentWillMount() {
    //     if (!isEmpty(this.props.user)) {
    //         switch (this.props.user.userType) {
    //             case "admin":
    //                 this.setState({
    //                     userType: "Administrador",
    //                     profileButton: navbarButtonUser,
    //                     eventsButton: navbarButtonEvents,
    //                     categoriesButton: navbarButtonCategories,
    //                     sponsorsButton: navbarButtonSponsors,
    //                     user: this.props.user
    //                 })
    //                 break;
    //             case "sponsor":
    //                 this.setState({
    //                     userType: "Sponsor",
    //                     profileButton: navbarButtonUser,
    //                     eventsButton: navbarButtonEvents,
    //                     user: this.props.user
    //                 })
    //                 break;
    //             default:
    //                 // Solicitante
    //                 break;
    //         }
    //     }
    // }

    componentWillMount() {
        if (!this.props.loading) {
            switch (this.props.user.userType) {
                case "admin":
                    this.setState({
                        component: < AdminLayout {...this.props}/>
                    })
                    break;
                case "sponsor":
                    this.setState({
                        component: < SponsorLayout {...this.props}/>
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
