import { IThought } from '../types'
import useThoughts from './useThoughts'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useChangeSecureThought(thought: IThought) {
    const thoughts = useThoughts()

    async function changeSecureThought() {
        const newThoughts: IThought[] = []

        thoughts.map(thoughtMap => {
            if (thoughtMap.id != thought.id) {
                newThoughts.push(thoughtMap)
            } else {
                newThoughts.push({
                    ...thoughtMap,
                    secure: !thoughtMap.secure
                })
            }
        })

        await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify(newThoughts))
    }

    return changeSecureThought
}

export default useChangeSecureThought