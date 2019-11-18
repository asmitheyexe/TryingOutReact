import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/js/App'


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

/**
 * Library used for API requests, there are 2 popular options
 *      Axios - Library built on Fetch, makes life easier
 *      Fetch - build in browser but has less features
 * 
 * 
 */