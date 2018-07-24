import { Linking } from 'react-native';

export function open(url, target = '_blank') {
  Linking.openURL(url)
    .then(url => {
      if (url) {
        console.log('URL opened');
      }
    })
    .catch(error => console.log('URL cannot be open ', error));
}
