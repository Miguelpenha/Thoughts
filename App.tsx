import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import useUpdateApp from './utils/useUpdateApp'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { AuthProvider } from './contexts/authContext'
import { SettingsProvider } from './contexts/settingsContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Routes from './routes'
import Toast from 'react-native-toast-message'
import toastConfig from './utils/toastConfig'

SplashScreen.preventAutoHideAsync()

function App() {
  const updateApp = useUpdateApp()

  useEffect(() => {
    SplashScreen.hideAsync().then(async () => {
      console.log(green('>> App Started'))

      await updateApp()
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SettingsProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes/>
            <Toast config={toastConfig} onPress={() => Toast.hide()}/>
          </GestureHandlerRootView>
        </SettingsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App