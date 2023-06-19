import { IThought } from '../types'
import useThoughts from './useThoughts'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useDeleteThought(thought: IThought) {
    const thoughts = useThoughts()
    
    async function deleteThought() {
        const newThoughts: IThought[] = []

        thoughts.map(thoughtMap => {
            if (thoughtMap.id != thought.id) {
                newThoughts.push(thoughtMap)
            }
        })

        await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify(newThoughts))
    }

    return deleteThought
}

export default useDeleteThought