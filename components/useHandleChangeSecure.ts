import { IThought } from '../types'
import useChangeSecureThought from '../services/useChangeSecureThought'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useHandleChangeSecure(thought: IThought) {
    const changeSecureThought = useChangeSecureThought(thought.id)

    async function handleChangeSecure() {
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

    return handleChangeSecure
}

export default useHandleChangeSecure