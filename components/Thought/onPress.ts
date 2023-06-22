import { IThought } from '../../types'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useOnPress(thought: IThought) {
    const navigation = useNavigation()

    async function onPress() {
        if (thought.secure) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                navigation.navigate('Thought', {
                    thoughtID: thought.id
                })
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Autenticação falhou'
                })
            }
        } else {
            navigation.navigate('Thought', { thoughtID: thought.id })
        }
    }

    return onPress
}

export default useOnPress