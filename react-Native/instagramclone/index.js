import React from 'react'
import {Provider} from 'react-redux'
import { registerRootComponent } from 'expo';

import {AppRegistry} from 'react-native'
import Navigator from './src/Navigator'
import {name as appName} from './app.json'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigator/>
    </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

// registerRootComponent(Navigator);
AppRegistry.registerComponent(appName, () => Redux)
