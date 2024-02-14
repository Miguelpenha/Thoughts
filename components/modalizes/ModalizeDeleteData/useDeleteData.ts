import useAuth from '../../../contexts/authContext'
import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

function useDeleteData() {
    const { logout } = useAuth()

    async function deleteData() {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            await logout()
            await AsyncStorage.removeItem('@thoughts:thoughts', null)
            await AsyncStorage.removeItem('@thoughts:groups', null)
            await AsyncStorage.removeItem('@thoughts:settings', null)

            Toast.show({
                type: 'error',
                text1: 'Dados deletados'
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Autenticação falhou'
            })
        }
    }

    return deleteData
}

export default useDeleteData