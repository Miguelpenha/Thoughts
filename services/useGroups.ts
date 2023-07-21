import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useGroups() {
    const [groups, setGroups] = useState<string[]>([])
    
    async function getGroups() {
        const groupsRaw = await AsyncStorage.getItem('@thoughts:groups')

        setGroups(groupsRaw ? JSON.parse(groupsRaw) : [])
    }

    useEffect(() => {
        getGroups().then()
    }, [groups])

    return groups
}

export default useGroups