import useAuth from '../../contexts/authContext'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useLogout() {
    const { logout: logoutRaw } = useAuth()

    async function logout() {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            await logoutRaw()

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

    return logout
}

export default useLogout