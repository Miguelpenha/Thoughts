import { useNavigation } from '@react-navigation/native'
import importThoughts from '../../../services/importThoughts'
import Toast from 'react-native-toast-message'

function useHandleSubmit(thoughtsImported: string) {
    const navigation = useNavigation()

    async function handleSubmit() {
        if (thoughtsImported) {
            await importThoughts(thoughtsImported)

            Toast.show({
                type: 'success',
                text1: 'Pensamentos importados com sucesso'
            })

            navigation.goBack()
        } else {
            Toast.show({
                type: 'error',
                text1: 'Você deve informar pensamentos para serem importados'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit