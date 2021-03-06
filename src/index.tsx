import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reportWebVitals from 'reportWebVitals';

import rootReducer from 'Reducers';
import { Provider } from 'react-redux';

import 'reset.css';
import 'styles/styles.scss';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
