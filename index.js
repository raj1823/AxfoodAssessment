/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './router';
import {name as appName} from './app.json';
import store from './rootReducer'
import {Provider} from 'react-redux'
import React from 'react'

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
