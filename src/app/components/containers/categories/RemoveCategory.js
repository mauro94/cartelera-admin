import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import RemoveCategory, { RemoveSucceeded, RemoveFailed, RemoveConfirm } from 'Presentational/categories/Remove'
import { CategoryActions } from 'Helpers/constants'

class Remove extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    handleConfirm(categoryToRemove) {
        ModalAlert({
            modal: RemoveConfirm,
            category: categoryToRemove,
            remove: this.handleRemove
        })
    }
    handleRemove(categoryToRemove) {
        this.categoryToRemove = categoryToRemove
        this.props.remove(categoryToRemove.id)
    }
    handleError() {
        ModalAlert({
            modal: RemoveFailed,
            category: this.categoryToRemove,
            error: this.props.category.error
        })
    }
    handleSuccess() {
        ModalAlert({
            modal: RemoveSucceeded,
            category: this.props.categoryToRemove
        })
    }
    render() {
        return (
            <RemoveCategory
                confirm={this.handleConfirm}
                action={CategoryActions.Remove}
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                category={this.props.categoryToRemove}
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
        remove: (id) => dispatch(thunks.category.remove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Remove)