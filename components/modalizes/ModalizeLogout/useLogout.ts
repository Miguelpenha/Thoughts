import useAuth from '../../../contexts/authContext'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useLogout() {
    const { logout } = useAuth()

    async function handleLogout() {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            await logout()

            Toast.show({
                type: 'error',
                text1: 'Logout feito'
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Autenticação falhou'
            })
        }
    }

    return handleLogout
}

export default useLogout