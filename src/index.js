import React from 'react';
import { AppRegistry } from 'react-native';
import { Text } from 'react-native';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const AppContainer = () => <Text>Hello from react native web!!</Text>;

AppRegistry.registerComponent('MyApp', () => AppContainer);
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root')
});
