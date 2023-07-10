import { useNavigation } from '@react-navigation/native'
import { INavigation } from '../../types'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useNavigateVerified() {
    const navigation = useNavigation()

    async function navigateVerified(page: keyof INavigation, params: object, secure: boolean=true) {
        if (secure) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                navigation.navigate(page, params as any)

                return true
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Autenticação falhou'
                })

                return false
            }
        } else {
            navigation.navigate(page, params as any)

            return true
        }
    }

    return navigateVerified
}

export default useNavigateVerified