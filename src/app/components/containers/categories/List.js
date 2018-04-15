import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Entity, CategoryActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { CategoriesList } from 'Presentational/categories'

class Categories extends React.Component {
    componentDidMount() {
        if (Entity.isEmpty(this.props.category.all)) {
            this.props.getCategories()
        }
    }
    
    render() {
        return (
            <CategoriesList
                action={CategoryActions.All}
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                categories={this.props.category.all} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => {
            dispatch(thunks.category.all())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)