import { useTheme } from 'styled-components'
import useAuth from '../contexts/authContext'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import MainStack from './MainStack'
import InitialStack from './InitialStack'

function Routes() {
  const theme = useTheme()
  const { isLogged } = useAuth()

  return (
    <>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor={theme.backgroundColor}
      />
      <NavigationContainer theme={themeRouter}>
        {isLogged && <MainStack/>}
        {!isLogged && <InitialStack/>}
      </NavigationContainer>
    </>
  )
}

export default Routes