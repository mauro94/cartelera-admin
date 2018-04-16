import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import AddCategory, { AddSucceeded, AddFailed } from 'Presentational/categories/Add'
import { CategoryActions } from 'Helpers/constants'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleAdd(name) {
        this.name = name
        this.props.add(name)
    }
    handleError() {
        ModalAlert({
            modal: AddFailed,
            category: this.name,
            error: this.props.category.error
        })
    }
    handleSuccess() {
        ModalAlert({
            modal: AddSucceeded,
            category: this.props.category.show
        })
    }
    render() {
        return (
            <AddCategory
                add={this.handleAdd}
                action={CategoryActions.Create}
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                category={this.props.category.show}
                onSuccess={this.handleSuccess}
                onError={this.handleError} />
        )
    }
}

const mapStateToProps = (state) => {
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