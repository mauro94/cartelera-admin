import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn } from 'Config/helper'
import { Status } from 'Config/constants'
import { 
    navbarButtonUser,
    navbarButtonEvents,
    navbarButtonCategories,
    navbarButtonSponsors,
    navbarButtonEmpty
 } from 'Presentational/HomeComponents'
import HomePage from 'Presentational/HomePage';

let component = <p>Loading...</p>

class Home extends React.Component {
    constructor() {
        super()
        this.userType = ""
        this.profileButton = null
        this.eventsButton = null
        this.categoriesButton = null
        this.sponsorsButton = null
        this.main = null
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

                    this.logoutButton = <button onClick={this.props.logout}>logout</button>
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

            user={this.props.user}
        />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.current
    }
}

export default connect(
    mapStateToProps
)(Home)
