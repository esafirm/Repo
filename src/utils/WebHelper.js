import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export function webOnly(any) {
  return isWeb ? any : null;
}

export { isWeb };
