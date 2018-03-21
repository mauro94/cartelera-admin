import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn, isEmpty } from 'Config/helper'
import { Status } from 'Config/constants'
import {
    navbarButtonUser,
    navbarButtonEvents,
    navbarButtonCategories,
    navbarButtonSponsors
} from 'Presentational/HomeComponents'
import HomePage from 'Presentational/HomePage';
import 'Style/main.scss'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            userType: "",
            profileButton: null,
            eventsButton: null,
            categoriesButton: null,
            sponsorsButton: null,
            user: null
        }
    }

    componentWillMount() {
        if (!isEmpty(this.props.user)) {
            switch (this.props.user.userType) {
                // Admin
                case "admin":
                    this.setState({
                        userType: "Administrador",
                        profileButton: navbarButtonUser,
                        eventsButton: navbarButtonEvents,
                        categoriesButton: navbarButtonCategories,
                        sponsorsButton: navbarButtonSponsors,
                        user: this.props.user
                    })
                    break;
                // Sponsor
                case "sponsor":
                    this.setState({
                        userType: "Sponsor",
                        profileButton: navbarButtonUser,
                        eventsButton: navbarButtonEvents,
                        user: this.props.user
                    })
                    break;
                default:
                    // Solicitante
                    break;
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && !nextProps.loading && !isEmpty(this.props.user)) {
            switch (nextProps.user.userType) {
                // Admin
                case "admin":
                    this.setState({
                        userType: "Administrador",
                        profileButton: navbarButtonUser,
                        eventsButton: navbarButtonEvents,
                        categoriesButton: navbarButtonCategories,
                        sponsorsButton: navbarButtonSponsors,
                        user: nextProps.user
                    })
                    break;
                // Sponsor
                case "sponsor":
                    this.setState({
                        userType: "Sponsor",
                        profileButton: navbarButtonUser,
                        eventsButton: navbarButtonEvents,
                        user: nextProps.user
                    })
                    break;
                default:
                    // Solicitante
                    break;
            }
        }
    }

    render() {
        return <HomePage
            userType={this.state.userType}
            profileButton={this.state.profileButton}
            eventsButton={this.state.eventsButton}
            categoriesButton={this.state.categoriesButton}
            sponsorsButton={this.state.sponsorsButton}
            logout={this.props.logout}
            user={this.state.user}
        />
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
)(Home))
