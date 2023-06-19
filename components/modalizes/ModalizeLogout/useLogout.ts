import useAuth from '../../../contexts/authContext'
import Toast from 'react-native-toast-message'

function useLogout() {
    const { logout: logoutRaw } = useAuth()

    async function logout() {
        await logoutRaw()

        Toast.show({
            type: 'error',
            text1: 'Logout feito'
        })
    }

    return logout
}

export default useLogout