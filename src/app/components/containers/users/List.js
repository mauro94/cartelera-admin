import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Status, UserActions, Format } from 'Helpers/'
import { UsersList, UserShow } from 'Presentational/users'
import { Error } from 'Presentational/elements'
import { waitingOnAction, actionSucceded, actionFailed } from 'Containers/helper'

var Spinner = require('react-spinkit');

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            waiting: true,
            selectedIndex: 0,
            component: <Spinner name="pulse" />,
            users: []
        }
        this.showUser = this.showUser.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    componentWillMount() {
        if ((!this.props.loading) &&
            (!this.props.user || Format.empty(this.props.user.all))) {
            this.props.loadUsers()
        }
        else if (this.props.ready) {
            this.handleSuccess(this.props.user.all[this.props.type])
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type != nextProps.type) {
            this.handleSuccess(nextProps.user.all[nextProps.type])
        }
        if (waitingOnAction(this.props, nextProps, UserActions.All)) {
            this.setState({
                waiting: true,
                error: false,
                component: <Spinner name="pulse" />
            })
        }
        else if (actionSucceded(this.state.waiting, nextProps, UserActions.All)) {
            this.handleSuccess(nextProps.user.all[nextProps.type])
        }
        else if (actionFailed(this.state.waiting, nextProps, UserActions.All)) {
            this.handleError()
        }
    }

    handleSuccess(list) {
        this.setState({
            error: false,
            waiting: false,
            selectedIndex: 0,
            users: list
        })
    }

    handleError() {
        this.setState({
            error: true,
            waiting: false,
            selectedIndex: 0,
            component: <Error message='No se encontraron usuarios' />,
            users: []
        })
    }

    showUser(index) {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        if (this.state.waiting || this.state.error) {
            return this.state.component
        }
        return (
            (<React.Fragment>
                <UsersList
                    users={this.state.users}
                    show={this.showUser}
                    selectedIndex={this.state.selectedIndex} />
                <UserShow
                    user={this.state.users[this.state.selectedIndex]} />
            </React.Fragment>)
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        loading: state.user.status == Status.WaitingOnServer,
        failed: state.user.status == Status.Failed,
        ready: state.user.status == Status.Ready,
        error: state.user.error,
        action: state.user.lastAction
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(thunks.user.all())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)