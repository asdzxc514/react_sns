import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({ Component, store }) => {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <title>NodeBird</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.5/antd.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.5/antd.js" />
                </Head>
                <AppLayout>
                    <Component />
                </AppLayout>
            </Provider>
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType, 
    store: PropTypes.object,
}

export default withRedux((initialState, options) => {
    // 여기에다 store 커스터마이징
    const middlewares = [];
    const enhancer = compose(
        applyMiddleware(...middlewares), 
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );  // enhancer : 향상시키다
    const store = createStore(reducer, initialState, enhancer);

    return store;
})(NodeBird);

// hot(NumberBaseBall);
