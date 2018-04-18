import React from 'react'
import { connect } from 'react-redux'
import { CategoryActions } from 'Helpers/constants'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import { EditSucceeded, EditFailed } from 'Presentational/categories/Edit'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    componentWillMount() {
        this.setState({
            category: {
                name: this.props.categoryToUpdate.name,
                enabled: this.props.categoryToUpdate.enabled
            }
        })
    }
    handleError() {
        ModalAlert({
            modal: EditFailed,
            category: this.props.categoryToUpdate,
            error: this.props.category.error
        })
    }
    handleSubmit(category) {
        let updatedCategory = { id: this.props.categoryToUpdate.id }
        for (var key in this.props.categoryToUpdate) {
            if (category.hasOwnProperty(key)) {
                if (this.props.categoryToUpdate[key] != category[key] && key != "id") {
                    updatedCategory[key] = category[key]
                }
            }
        }
        this.props.update(updatedCategory)
    }
    handleSuccess() {
        ModalAlert({
            modal: EditSucceeded,
            category: this.props.category.show
        })
    }
    render() {
        const { children } = this.props;
        let childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                action: (CategoryActions.Update),
                handleSubmit: this.handleSubmit,
                reducer: {
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                },
                category: this.state.category,
                onSuccess: this.handleSuccess,
                onError: this.handleError
            }));
        return (childrenWithProps)
    }
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)