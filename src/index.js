import { AppRegistry, Text } from 'react-native';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

registerServiceWorker();

AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root')
});
