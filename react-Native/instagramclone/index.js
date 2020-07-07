import { registerRootComponent } from 'expo';

import App from './App';
import Feed from './src/screens/Feed'
import Navigator from './src/Navigator'
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Navigator);
