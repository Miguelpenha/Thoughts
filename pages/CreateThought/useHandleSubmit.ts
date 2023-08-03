import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import createThought from '../../services/createThought'
import uuid from 'react-native-uuid'

function useHandleSubmit(icon: string, group: string) {
    const navigation = useNavigation()

    async function handleSubmit(name: string, text: string, secure: boolean) {
        if (name) {
            await createThought({
                name,
                text,
                secure,
                icon: icon as any,
                id: uuid.v4().toString(),
                group: group || undefined
            })

            Toast.show({
                type: 'success',
                text1: 'Pensamento criado com sucesso!'
            })

            navigation.goBack()
        } else {
            Toast.show({
                type: 'error',
                text1: 'Nome não informado'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit