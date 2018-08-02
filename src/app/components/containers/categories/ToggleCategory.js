import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import ToggleCategory, { ToggleSucceeded, ToggleFailed, ToggleConfirm } from 'Presentational/categories/Toggle'
import { CategoryActions } from 'Helpers/constants'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    handleConfirm(categoryToToggle) {
        ModalAlert({
            modal: ToggleConfirm,
            category: categoryToToggle,
            toggle: this.handleToggle
        })
    }
    handleToggle(categoryToToggle) {
        categoryToToggle.enabled = !categoryToToggle.enabled
        this.categoryToToggle = categoryToToggle
        this.props.update(categoryToToggle)
    }
    handleError() {
        ModalAlert({
            modal: ToggleFailed,
            category: this.categoryToToggle,
            error: this.props.category.error
        })
    }
    handleSuccess() {
        ModalAlert({
            modal: ToggleSucceeded,
            category: this.props.categoryToToggle
        })
    }
    render() {
        return (
            <ToggleCategory
                confirm={this.handleConfirm}
                action={CategoryActions.Update}
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                category={this.props.categoryToToggle}
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
        update: category => {
            dispatch(thunks.category.update(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)