import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Login from '../pages/Login'

function InitialStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Login" component={Login}/>
        </Navigator>
    )
}

export default InitialStack