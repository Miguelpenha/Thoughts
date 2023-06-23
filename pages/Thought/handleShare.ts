import { IThought } from '../../types'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'
import { Share } from 'react-native'

function useHandleShare(thought: IThought) {
    async function handleShare() {
        if (thought.secure) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                await Share.share({
                    title: thought.name,
                    message: thought.text
                })
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Autenticação falhou'
                })
            }
        } else {
            await Share.share({
                title: thought.name,
                message: thought.text
            })
        }
    }

    return handleShare
}

export default useHandleShare