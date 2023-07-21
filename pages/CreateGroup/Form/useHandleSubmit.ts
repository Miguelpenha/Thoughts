import { useNavigation } from '@react-navigation/native'
import createGroup from '../../../services/createGroup'
import Toast from 'react-native-toast-message'

function useHandleSubmit(name: string) {
    const navigation = useNavigation()

    async function handleSubmit() {
        if (name) {
            await createGroup(name)

            Toast.show({
                type: 'success',
                text1: 'Grupo criado com sucesso!'
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