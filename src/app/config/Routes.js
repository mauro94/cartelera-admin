import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from 'Containers/App';

const Routes = () => (
    <Router>
        <Route path="/:filter?" component={App} />
    </Router>
)

export default Routes