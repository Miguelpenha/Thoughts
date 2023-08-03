import useEditThought from '../../services/useEditThought'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

function useHandleSubmit(thoughtID: string, icon: string, group: string) {
    const editThought = useEditThought(thoughtID)
    const navigation = useNavigation()

    async function handleSubmit(name: string, text: string, secure: boolean) {
        if (name) {
            await editThought({
                name,
                text,
                secure,
                icon: icon as any,
                group: group || undefined
            })

            Toast.show({
                type: 'info',
                text1: 'Pensamento Editado'
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