import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import RemoveCategory, { RemoveSucceeded, RemoveFailed } from 'Presentational/categories/Remove'
import { CategoryActions } from 'Helpers/constants'

class Remove extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleRemove(id) {
        this.id = id
        this.props.remove(id)
    }
    handleError() {
        {console.log("error remove")}
        ModalAlert({
            modal: RemoveFailed,
            category: this.name,
            error: this.props.category.error
        })
    }
    handleSuccess() {
        {console.log("success remove")}
        ModalAlert({
            modal: RemoveSucceeded,
            category: this.props.category.show
        })
    }
    render() {
        return (
            <RemoveCategory
                remove={this.handleRemove}
                action={CategoryActions.Remove}
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                category={this.props.id}
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