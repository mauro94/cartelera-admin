import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userDictionary, getUserType } from './helper'
import { Entity, history, UserActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { UsersList } from 'Presentational/users'

class Users extends React.Component {
    componentDidMount() {
        if (Entity.isEmpty(this.props.user.all)) {
            this.props.getUsers()
        }
    }
    parseUsers() {
        if (Entity.isEmpty(this.props.user.all)) {
            return []
        }
        let dict = userDictionary(this.props.user.all)
        if (Entity.isEmpty(dict)) {
            return []
        }
        return dict[this.props.type || 'sponsors']
    }
    render() {
        return (
            <UsersList
                action={UserActions.All}
                reducer={{
                    status: this.props.user.status,
                    action: this.props.user.action,
                    error: this.props.user.error
                }}
                type={this.props.type || 'sponsors'}
                users={this.parseUsers()}
                location={this.props.location} />
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
        getUsers: () => {
            dispatch(thunks.user.all())
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Users))