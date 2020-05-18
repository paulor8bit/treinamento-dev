import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

// console.tron.log('Olá! :D');

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
    </>
);

export default App;
