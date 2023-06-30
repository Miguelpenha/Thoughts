import { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  owner: 'miguelpenha',
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
    url: 'https://u.expo.dev/b2972ba3-acee-4262-92ff-1bb709c8ba94'
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
      projectId: 'b2972ba3-acee-4262-92ff-1bb709c8ba94'
    }
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  },
  plugins: [
    [
      'expo-local-authentication',
      {
        faceIDPermission: 'Permita Thoughts usar o Face ID.'
      }
    ]
  ]
})