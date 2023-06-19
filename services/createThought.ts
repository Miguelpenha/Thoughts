import { IThought } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function createThought(thought: IThought) {
    const thoughtsRaw = await AsyncStorage.getItem('@thoughts:thoughts')
    const thoughts: IThought[] = thoughtsRaw ? JSON.parse(thoughtsRaw) : []

    await AsyncStorage.setItem('@thoughts:thoughts', JSON.stringify([...thoughts, thought]))
}

export default createThought