import useThoughts from './useThoughts'
import { IThought } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useChangeSecureThought(id: string) {
    const thoughts = useThoughts()

    async function changeSecureThought() {
        const newThoughts: IThought[] = []

        thoughts.map(thoughtMap => {
            if (thoughtMap.id != id) {
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