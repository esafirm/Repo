import { isWeb } from './WebHelper';
import { Linking } from 'react-native';

export function open(url, target = '_blank') {
  if (isWeb) {
    window.open(url, target);
  } else {
    Linking.openURL(url)
      .then(url => {
        if (url) {
          console.log('URL opened');
        }
      })
      .catch(error => console.log('URL cannot be open ', error));
  }
}
