import { IThought } from '../types'
import useThoughts from './useThoughts'
import AsyncStorage from '@react-native-async-storage/async-storage'

type IThoughtEdited = Omit<IThought, 'id'>

function useEditThought(thought: IThought) {
    const thoughts = useThoughts()
    
    async function editThought(thoughtEdited: IThoughtEdited) {
        const editedThoughts: IThought[] = []

        thoughts.map(thoughtMap => {
            if (thoughtMap.id == thought.id) {
                editedThoughts.push({
                    id: thought.id,
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