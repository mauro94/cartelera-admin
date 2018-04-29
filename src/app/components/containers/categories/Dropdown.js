import React from 'react'
import { connect } from 'react-redux'
import { Entity, CategoryActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { SelectComponent } from 'Presentational/elements/Input'
import load from 'Containers/hoc/Load'

// const CategoriesDropdown = (props) => (
//     <Selector
//         inputSizeSmall
//         // label='category'
//         list={props.formattedCategories}
//         {...props} />
// )

const LoadedCategoriesDropdown = load('categories', SelectComponent)

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.formatCategories = this.formatCategories.bind(this)
        this.state = {
            formattedCategories: []
        }
    }

    componentWillMount() {
        if (Entity.isEmpty(this.props.category.all)) {
            this.props.getCategories()
        }
    }

    formatCategories() {
        let formattedCategories = []
        formattedCategories = this.props.category.all.map(category => (
            {
                key: category.id,
                text: category.name
            }
        ))
        this.setState({
            formattedCategories: formattedCategories
        })
    }

    render() {
        return (
            <LoadedCategoriesDropdown
                action={CategoryActions.All}
                hide
                reducer={{
                    status: this.props.category.status,
                    action: this.props.category.action,
                    error: this.props.category.error
                }}
                onSuccess={() => this.formatCategories()}
                categories={this.props.category.all}
                list={this.state.formattedCategories}
                {...this.props} />
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