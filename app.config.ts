import { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  scheme: 'thoughts',
  name: 'Thoughts',
  slug: 'Thoughts',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    resizeMode: 'contain',
    image: './assets/splash.png',
    backgroundColor: '#13111b'
  },
  updates: {
    url: ''
  },
  assetBundlePatterns: [
    '**/*'
  ],
  android: {
    adaptiveIcon: {
      backgroundColor: '#13111b',
      foregroundImage: './assets/adaptive-icon.png'
    },
    package: 'com.miguelpenha.thoughts'
  },
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    ...process.env,
    eas: {
      projectId: ''
    }
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  }
})