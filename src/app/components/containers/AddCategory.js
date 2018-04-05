import React from 'react'
import Callout from 'Presentational/elements/Callout'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { faListAlt } from '@fortawesome/fontawesome-free-regular'

class AddCategory extends React.Component {
    render() {
        return (
            <Callout name="pulse" add={this.props.add} placeholder="Ejemplo: Deportes" type="text" icon={ faListAlt } />
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.category.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => dispatch(thunks.category.create(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)