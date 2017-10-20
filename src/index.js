import React from 'react';
import { AppRegistry } from 'react-native';
import { Text } from 'react-native';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root')
});
