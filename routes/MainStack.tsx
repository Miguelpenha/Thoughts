import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Home from '../pages/Home'
import Thought from '../pages/Thought'
import Settings from '../pages/Settings'
import CreateThought from '../pages/CreateThought'

function MainStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home}/>
            <Screen name="Thought" component={Thought}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="CreateThought" component={CreateThought}/>
        </Navigator>
    )
}

export default MainStack