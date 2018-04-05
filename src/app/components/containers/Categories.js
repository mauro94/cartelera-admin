import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Config/constants'
import CategoryList from 'Presentational/categories/List'
import { isEmpty } from 'Config/helper'

var Spinner = require('react-spinkit');

class Categories extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    
    componentWillMount() {
        if ((!this.props.loading) &&
            (!this.props.category || isEmpty(this.props.category.all))) {
            this.props.loadCategories()
        }
        else if (this.props.ready) {
            this.setState({ loading: false })
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.loading) && nextProps.ready) {
            if (nextProps.category.all.length > 0)
                this.setState({ loading: false })
        }
    }
    
    render() {
        return (
            <React.Fragment>
                {this.state.loading && <Spinner name="pulse" />}
                {!this.state.loading && <CategoryList categories={this.props.category.all} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.category,
        loading: state.category.status == Status.WaitingOnServer,
        ready: state.category.status == Status.Ready
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCategories: () => {
            dispatch(thunks.category.all())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)

