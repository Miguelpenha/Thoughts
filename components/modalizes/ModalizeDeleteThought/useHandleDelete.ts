import { IThought } from '../../../types'
import useDeleteThought from '../../../services/useDeleteThought'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

function useHandleDelete(thought: IThought) {
    const deleteThought = useDeleteThought(thought)
    const navigation = useNavigation()

    async function handleDelete() {
        await deleteThought()

        Toast.show({
            type: 'error',
            text1: 'Pensamento excluído'
        })

        navigation.navigate('Home')
    }

    return handleDelete
}

export default useHandleDelete