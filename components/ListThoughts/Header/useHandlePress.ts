import { useNavigation } from '@react-navigation/native'

function useHandlePress(groupName?: string) {
    const navigation = useNavigation()

    function handlePress() {
        navigation.navigate('CreateThought', { groupName })
    }

    return handlePress
}

export default useHandlePress