import React from 'react'
import { connect } from 'react-redux'
import { Entity, CategoryActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { SelectComponent } from 'Presentational/elements/Input'
import load from 'Containers/hoc/Load'

const LoadedCategoriesDropdown = load('categories', SelectComponent)

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.updateCategories = this.updateCategories.bind(this)
        this.getFormattedCategories = this.getFormattedCategories.bind(this)
        this.getFilteredCategories = this.getFilteredCategories.bind(this)
        let formattedCategories = []
        if (!Entity.isEmpty(this.props.category.all)) {
            formattedCategories = this.getFormattedCategories()
        }
        this.state = {
            formattedCategories: formattedCategories
        }
    }

    componentWillMount() {
        if (Entity.isEmpty(this.props.category.all)) {
            this.props.getCategories()
        }
    }

    getFilteredCategories() {
        return this.props.category.all.filter(category => category.enabled)
    }

    getFormattedCategories() {
        let filteredCategories = this.getFilteredCategories()
        return filteredCategories.map(category => (
            {
                key: category.id,
                text: category.name
            }
        ))
    }

    updateCategories() {
        let formattedCategories = this.getFormattedCategories()
        this.setState({
            formattedCategories: formattedCategories
        })
    }

    render() {
        let { getCategories, category, ...dropdownProps } = this.props
        return (
            <LoadedCategoriesDropdown
                action={CategoryActions.All}
                hide
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                onSuccess={() => this.updateCategories()}
                categories={this.props.category.all}
                selected={this.props.form.values.categoryId}
                list={this.state.formattedCategories}
                {...dropdownProps} />
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
)(Dropdown)