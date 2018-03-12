import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn } from 'Config/helper'
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
        this.userType = ""
        this.profileButton = null
        this.eventsButton = null
        this.categoriesButton = null
        this.sponsorsButton = null
    }
    
    componentWillMount() {
        if(this.props.user.status != Status.WaitingOnServer) {
            switch (/*this.props.user.current.userType*/1) {
                // Admin
                case 0:
                    this.userType = "Administrador"
                    this.profileButton = navbarButtonUser
                    this.eventsButton = navbarButtonEvents
                    this.categoriesButton = navbarButtonCategories
                    this.sponsorsButton = navbarButtonSponsors
                break;
                // Sponsor
                case 1:
                    this.userType = "Sponsor"
                    this.profileButton = navbarButtonUser
                    this.eventsButton = navbarButtonEvents
                break;
                default:
                    // Solicitante
                break;
            } 
        }
    }

    render() {
        return <HomePage 
            userType={this.userType} 
            profileButton={this.profileButton}
            eventsButton={this.eventsButton}
            categoriesButton={this.categoriesButton}
            sponsorsButton={this.sponsorsButton}
            logout={this.props.logout}
            user={this.props.user.current}
        />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
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
