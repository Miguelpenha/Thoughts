import AsyncStorage from '@react-native-async-storage/async-storage'

async function createGroup(group: string) {
    const groupsRaw = await AsyncStorage.getItem('@thoughts:groups')
    const groups: string[] = groupsRaw ? JSON.parse(groupsRaw) : []

    await AsyncStorage.setItem('@thoughts:groups', JSON.stringify([...groups, group]))
}

export default createGroup