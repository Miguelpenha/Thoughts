import AsyncStorage from '@react-native-async-storage/async-storage'
import { IThought } from '../types'

async function editGroup(groupOld: string, group: string) {
    const groupsRaw = await AsyncStorage.getItem('@thoughts:groups')
    const groups: string[] = groupsRaw ? JSON.parse(groupsRaw) : []
    const groupsEdited: string[] = []
    const thoughtsRaw = await AsyncStorage.getItem('@thoughts:thoughts')
    const thoughts: IThought[] = thoughtsRaw ? JSON.parse(thoughtsRaw) : []
    const thoughtsEdited: IThought[] = []

    groups.map(groupMap => {
        if (groupMap !== groupOld) {
            groupsEdited.push(groupMap)
        }
    })

    thoughts.map(thought => {
        if (thought.group === groupOld) {
            thoughtsEdited.push({
                ...thought,
                group
            })
        } else {
            thoughtsEdited.push(thought)
        }
    })

    await AsyncStorage.setItem('@thoughts:groups', JSON.stringify([...groupsEdited, group]))
    await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify(thoughtsEdited))
}

export default editGroup