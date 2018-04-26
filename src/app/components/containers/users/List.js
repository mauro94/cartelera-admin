import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { withRouter, Redirect, Route } from 'react-router-dom'
import { getIndex, getUserType, userDictionary } from './helper'
import { Entity, history, UserActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { UsersList } from 'Presentational/users'

class Users extends React.Component {
    constructor() {
        super()
        this.renderRoutes = this.renderRoutes.bind(this)
        this.state = {
            renderRoutes: false
        }
    }
    componentDidMount() {
        if (Entity.isEmpty(this.props.user.all) || this.props.user.all[0].type != this.props.type) {
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
        return (
            <Route path='/'>
                <React.Fragment>
                    <UsersList
                        action={UserActions.All}
                        hide
                        location={this.props.location}
                        onSuccess={this.renderRoutes}
                        reducer={{
                            status: this.props.user.status,
                            action: this.props.user.action,
                            error: this.props.user.error
                        }}
                        renderSelectedUserRoutes={this.state.renderRoutes}
                        type={this.props.type || 'sponsors'}
                        users={this.props.user.all} />
                </React.Fragment>
            </Route>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        location: ownProps.location,
        match: ownProps.match
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