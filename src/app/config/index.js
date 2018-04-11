import React from 'react';
import { render } from 'react-dom';
import Root from 'Config/Root';
import Grid from 'react-css-grid';

render(
    <Root/>,
    document.getElementById('root')
)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('Config/Root', () => {
        render(<Root/>,
            document.getElementById('root'))
    })
}