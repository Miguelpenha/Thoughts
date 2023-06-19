import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function logout(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    await AsyncStorage.removeItem('@thoughts:name', null)
    await AsyncStorage.removeItem('@thoughts:password', null)

    setIsLogged(false)
}

export default logout