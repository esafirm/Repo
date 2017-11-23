import { Platform } from 'react-native';
import getAllImage from './images';

const isWeb = Platform.OS === 'web';
const allImages = isWeb ? getAllImages() : getAllImage();
const imagesFor = filter =>
  isWeb ? imagesForWeb(filter) : imagesForApp(filter);

function getAllImages() {
  const importAll = r => r.keys().map(r);
  return importAll(require.context('./images', false));
}

function imagesForWeb(filter) {
  return allImages.filter(item => item.includes(filter));
}

function imagesForApp(filter) {
  const selectedImages = allImages.filter(imageHolder =>
    imageHolder.name.includes(filter)
  );
  if (selectedImages && selectedImages.length > 0) {
    return selectedImages[0].images;
  }
  return [];
}

export { imagesFor };
