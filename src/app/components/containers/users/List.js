import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Config/constants'
import { UsersList, UserShow } from 'Presentational/users'
import { isEmpty } from 'Config/helper'

var Spinner = require('react-spinkit');

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            selectedIndex: 0,
            users: []
        }
        this.showUser = this.showUser.bind(this)
    }
    componentWillMount() {
        if ((!this.props.loading) &&
            (!this.props.user || isEmpty(this.props.user.all))) {
            this.props.loadUsers()
        }
        else if (this.props.ready) {
            this.setState({
                loading: false,
                selectedIndex: 0,
                users: this.props.user.all[this.props.type]
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.loading) && nextProps.ready) {
            if (!isEmpty(nextProps.user.all))
                this.setState({
                    loading: false,
                    selectedIndex: 0,
                    users: nextProps.user.all[this.props.type]
                })
        }
        else if (this.props.type != nextProps.type) {
            this.setState({
                selectedIndex: 0,
                users: nextProps.user.all[nextProps.type]
            })
        }
    }

    showUser(index) {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading && <Spinner name="pulse" />}
                {!this.state.loading &&
                    <React.Fragment>
                        <UsersList
                            users={this.state.users}
                            show={this.showUser}
                            selectedIndex={this.state.selectedIndex} />
                        <UserShow
                            user={this.state.users[this.state.selectedIndex]} />
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        loading: state.user.status == Status.WaitingOnServer,
        ready: state.user.status == Status.Ready
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(thunks.user.all())
        },
        getAvatar: (email) => {
            dispatch(thunks.user.avatar(email))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
