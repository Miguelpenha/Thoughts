import { IThought } from '../types'
import useThoughts from './useThoughts'
import AsyncStorage from '@react-native-async-storage/async-storage'

type IThoughtEdited = Omit<IThought, 'id'>

function useEditThought(thoughtID: string) {
    const thoughts = useThoughts()
    
    async function editThought(thoughtEdited: IThoughtEdited) {
        const editedThoughts: IThought[] = []

        thoughts.map(thoughtMap => {
            if (thoughtMap.id == thoughtID) {
                editedThoughts.push({
                    id: thoughtID,
                    ...thoughtEdited
                })
            } else {
                editedThoughts.push(thoughtMap)
            }
        })

        await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify(editedThoughts))
    }

    return editThought
}

export default useEditThought