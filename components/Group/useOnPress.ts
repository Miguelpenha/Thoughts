import { useNavigation } from '@react-navigation/native'

function useOnPress(group: string) {
    const navigation = useNavigation()

    async function onPress() {
        navigation.navigate('Group', {
            groupName: group
        })
    }

    return onPress
}

export default useOnPress