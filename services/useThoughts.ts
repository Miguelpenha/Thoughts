import { useState, useEffect } from 'react'
import { IThought } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useThoughts() {
    const [thoughts, setThoughts] = useState<IThought[]>([])
    
    async function getThoughts() {
        const thoughtsRaw = await AsyncStorage.getItem('@thoughts:thoughts')

        setThoughts(thoughtsRaw ? JSON.parse(thoughtsRaw) : [])
    }

    useEffect(() => {
        getThoughts().then()
    }, [thoughts])

    return thoughts
}

export default useThoughts