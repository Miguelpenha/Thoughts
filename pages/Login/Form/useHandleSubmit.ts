import useAuth from '../../../contexts/authContext'
import Toast from 'react-native-toast-message'

function useHandleSubmit(name: string, password: string) {
    const { login } = useAuth()

    async function handleSubmit() {
        if (name && password) {
            await login(name, password)

            Toast.show({
                type: 'success',
                text1: 'Login feito com sucesso'
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Login ou senha incorretos'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit