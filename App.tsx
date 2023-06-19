import React, { useEffect } from 'react'
import updateApp from './utils/updateApp'
import * as SplashScreen from 'expo-splash-screen'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { AuthProvider } from './contexts/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Routes from './routes'
import Toast from 'react-native-toast-message'
import toastConfig from './utils/toastConfig'

SplashScreen.preventAutoHideAsync()

function App() {
  useEffect(() => {
    updateApp().then()

    SplashScreen.hideAsync().then(() => {
      console.log(green('>> App Started'))
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes/>
          <Toast config={toastConfig} onPress={() => Toast.hide()}/>
        </GestureHandlerRootView>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App