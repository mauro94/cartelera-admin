import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { withRouter, Redirect, Route } from 'react-router-dom'
import { getIndex, getUserType, userDictionary } from './helper'
import { Entity, history, UserActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { UsersList, ShowUser, EditUser } from 'Presentational/users'

class Users extends React.Component {
    constructor() {
        super()
        this.renderRoutes = this.renderRoutes.bind(this)
        this.state = {
            renderRoutes: false
        }
    }
    componentDidMount() {
        if (Entity.isEmpty(this.props.user.all)) {
            this.props.getUsers(this.props.type)
            this.setState({
                renderRoutes: false
            })
        }
        else {
            this.renderRoutes()
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.type != nextProps.type) {
            this.props.getUsers(nextProps.type)
            this.setState({
                renderRoutes: false
            })
        }
    }
    renderRoutes() {
        this.setState({
            renderRoutes: true
        })
    }
    render() {
        const routes = <React.Fragment>
            <Route
                exact path='/usuarios/:type'
                render={({ match }) => {
                    if (!Entity.isEmpty(this.props.user.all)) {
                        return <Redirect
                            to={`/usuarios/${match.params.type}/${this.props.user.all[0].id}`} />
                    }
                }} />
            <Route
                exact
                path='/usuarios/:type/:id/editar'
                render={({ match }) => (
                    <EditUser
                        type={match.params.type}
                        user={this.props.user.all[getIndex(this.props.user.all, match)]} />
                )} />
            <Route
                exact
                path='/usuarios/:type/:id'
                render={({ match }) => <ShowUser user={this.props.user.all[getIndex(this.props.user.all, match)]} />
                } />
        </React.Fragment>
        return (
            <Route path='/'>
                <React.Fragment>
                    <UsersList
                        action={UserActions.All}
                        hide
                        onSuccess={this.renderRoutes}
                        reducer={{
                            status: this.props.user.status,
                            action: this.props.user.action,
                            error: this.props.user.error
                        }}
                        type={this.props.type || 'sponsors'}
                        users={this.props.user.all}
                        location={this.props.location} />
                    {this.state.renderRoutes && routes}
                </React.Fragment>
            </Route>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        location: ownProps.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: (type) => {
            dispatch(thunks.user.all(type))
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Users))