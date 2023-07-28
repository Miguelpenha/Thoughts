import { IThought } from '../types'
import useGroups from './useGroups'
import useThoughts from './useThoughts'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useDeleteGroup(groupName: string) {
    const groups = useGroups()
    const thoughts = useThoughts()
    
    async function deleteGroup() {
        const newGroups: string[] = []

        groups.map(group => {
            if (group != groupName) {
                newGroups.push(group)
            }
        })

        await AsyncStorage.setItem('@thoughts:groups', JSON.stringify(newGroups))

        const newThoughts: IThought[] = []

        thoughts.map(thoughtMap => {
            if (thoughtMap.group && thoughtMap.group == groupName) {
                newThoughts.push({
                    ...thoughtMap,
                    group: undefined
                })
            } else {
                newThoughts.push(thoughtMap)
            }
        })

        await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify(newThoughts))
    }

    return deleteGroup
}

export default useDeleteGroup