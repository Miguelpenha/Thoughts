import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Home from '../pages/Home'
import Group from '../pages/Group'
import Thought from '../pages/Thought'
import Settings from '../pages/Settings'
import ReadQRCode from '../pages/ReadQRCode'
import CreateGroup from '../pages/CreateGroup'
import EditThought from '../pages/EditThought'
import CreateThought from '../pages/CreateThought'
import ImportThoughts from '../pages/ImportThoughts'

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
            <Screen name="Group" component={Group}/>
            <Screen name="Thought" component={Thought}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="ReadQRCode" component={ReadQRCode}/>
            <Screen name="CreateGroup" component={CreateGroup}/>
            <Screen name="EditThought" component={EditThought}/>
            <Screen name="CreateThought" component={CreateThought}/>
            <Screen name="ImportThoughts" component={ImportThoughts}/>
        </Navigator>
    )
}

export default MainStack