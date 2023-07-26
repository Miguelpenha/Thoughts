import { IThought } from '../../types'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useShowQRCode(thought: IThought) {
    async function showQRCode() {
        if (thought.secure) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                return true
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Autenticação falhou'
                })

                return false
            }
        } else {
            return true
        }
    }

    return showQRCode
}

export default useShowQRCode