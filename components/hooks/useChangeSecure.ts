import { IThought } from '../../types'
import useChangeSecureThought from '../../services/useChangeSecureThought'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useChangeSecure(thought: IThought) {
    const changeSecureThought = useChangeSecureThought(thought)

    async function changeSecure() {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            await changeSecureThought()

            Toast.show({
                type: !thought.secure ? 'success' : 'error',
                text1: `Pensamento ${!thought.secure ? '' : 'não'} seguro`
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Autenticação falhou'
            })
        }
    }

    return changeSecure
}

export default useChangeSecure