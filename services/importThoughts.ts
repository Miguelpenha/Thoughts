import AsyncStorage from '@react-native-async-storage/async-storage'
import { IThought } from '../types'

async function importThoughts(thoughtsImportedRaw: string) {
    const thoughtsRaw = await AsyncStorage.getItem('@thoughts:thoughts')
    const thoughts: IThought[] = thoughtsRaw ? JSON.parse(thoughtsRaw) : []
    const thoughtsImported: IThought[] = JSON.parse(thoughtsImportedRaw)

    await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify([...thoughts, ...thoughtsImported]))
}

export default importThoughts