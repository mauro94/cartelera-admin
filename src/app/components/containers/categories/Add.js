import React from 'react'
import { AddCategory, AddSucceeded, AddFailed } from 'Presentational/categories/Add'
import { Status, CategoryActions } from 'Helpers/constants'
import { waitingOnAction, actionSucceded, actionFailed } from 'Containers/helper'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.waiting = false
        this.handleAdd = this.handleAdd.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleAdd(name) {
        this.props.add(name)
    }
    handleError() {
        this.waiting = false
        confirmAlert({
            customUI: ({ onClose }) =>
                <AddFailed
                    category={this.props.category.show}
                    error='Ya existe una categoría con ese nombre'
                    handleOk={onClose} />
        })
    }
    handleSuccess() {
        this.waiting = false
        confirmAlert({
            customUI: ({ onClose }) =>
                <AddSucceeded
                    category={this.props.category.show}
                    handleOk={onClose} />
        })
    }
    componentWillReceiveProps(nextProps) {
        let status = {
            wasWaiting: this.waiting,
            reducer: {
                status: nextProps.category.status,
                action: nextProps.category.action,
                error: nextProps.category.error
            },
            action: CategoryActions.Create
        }
        if (waitingOnAction(status)) {
            this.waiting = true
        }
        else if (actionSucceded(status)) {
            this.handleSuccess()
        }
        else if (actionFailed(status)) {
            this.handleError()
        }
    }
    render() {
        return (
            <AddCategory add={this.handleAdd} />
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => dispatch(thunks.category.create(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)