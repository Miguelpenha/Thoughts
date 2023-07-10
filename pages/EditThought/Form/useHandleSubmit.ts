import { IThought } from '../../../types'
import useEditThought from '../../../services/useEditThought'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

function useHandleSubmit(thoughtOriginal: IThought, name: string, text: string, secure: boolean, icon: string) {
    const editThought = useEditThought(thoughtOriginal)
    const navigation = useNavigation()

    async function handleSubmit() {
        if (name) {
            await editThought({
                name,
                text,
                secure,
                icon: icon as any
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