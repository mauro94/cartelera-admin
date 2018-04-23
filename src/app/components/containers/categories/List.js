import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect, Route } from 'react-router-dom'
import { getIndex } from './helper'
import { Entity, CategoryActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import { CategoriesList, ShowCategory, EditCategory } from 'Presentational/categories'

class Categories extends React.Component {
    constructor() {
        super()
        this.renderRoutes = this.renderRoutes.bind(this)
        this.state = {
            renderRoutes: false
        }
    }

    componentWillMount() {
        if (Entity.isEmpty(this.props.category.all)) {
            this.props.getCategories()
            this.setState({
                renderRoutes: false
            })
        }
        else {
            this.renderRoutes()
        }
    }

    renderRoutes() {
        this.setState({
            renderRoutes: true
        })
    }

    render() {
        const routes = <React.Fragment>
            <Route
                exact
                path='/categorias'
                render={({ match }) => {
                    if (!Entity.isEmpty(this.props.category.all)) {
                        return <Redirect to={`/categorias/${this.props.category.all[0].id}`} />
                    }
                }} />
            <Route
                exact
                path='/categorias/:id/editar'
                render={({ match }) => (
                    <EditCategory category={this.props.category.all[getIndex(this.props.category.all, match)]} />
                )} />
            <Route
                exact
                path='/categorias/:id'
                render={({ match }) => (
                    <ShowCategory category={this.props.category.all[getIndex(this.props.category.all, match)]} />
                )} />
        </React.Fragment>
        return (
            <Route path='/'>
                <React.Fragment>
                    <CategoriesList
                        action={CategoryActions.All}
                        hide
                        onSuccess={this.renderRoutes}
                        reducer={{
                            status: this.props.category.status,
                            action: this.props.category.action,
                            error: this.props.category.error
                        }}
                        categories={this.props.category.all}
                        location={this.props.location} />
                    {this.state.renderRoutes && routes}
                </React.Fragment>
            </Route>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.category,
        location: ownProps.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => {
            dispatch(thunks.category.all())
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories))