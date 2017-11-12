import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';
const allImages = isWeb ? getAllImages() : null;
const imagesFor = filter => (isWeb ? imagesForWeb(filter) : null);

function getAllImages() {
  const importAll = r => r.keys().map(r);
  return importAll(require.context('./images', false));
}

function imagesForWeb(filter) {
  return allImages.filter(item => item.includes(filter));
}

export { imagesFor };
