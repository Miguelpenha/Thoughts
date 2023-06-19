import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useLoad(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    async function load() {
        const name = await AsyncStorage.getItem('@thoughts:name')
        const password = await AsyncStorage.getItem('@thoughts:password')

        if (name && password) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }

    return load
}

export default useLoad