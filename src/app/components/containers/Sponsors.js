import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Config/constants'
import SponsorList from 'Presentational/SponsorList'
import { isEmpty } from 'Config/helper'

var Spinner = require('react-spinkit');

class Sponsors extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentWillMount() {
        if ((!this.props.loading) &&
            (!this.props.user || isEmpty(this.props.user.all))) {
            this.props.loadUsers()
        }
        else if (this.props.ready) {
            this.setState({ loading: false })
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.loading) && nextProps.ready) {
            if (nextProps.user.all.length > 0)
                this.setState({ loading: false })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading && <Spinner name="pulse" />}
                {!this.state.loading && <SponsorList sponsors={this.props.user.all} />}
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sponsors)
