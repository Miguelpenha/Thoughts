import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function login(name: string, password: string, setIsLogged: Dispatch<SetStateAction<boolean>>) {
    await AsyncStorage.setItem('@thoughts:name', name)
    await AsyncStorage.setItem('@thoughts:password', password)

    setIsLogged(true)
}

export default login