import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));
