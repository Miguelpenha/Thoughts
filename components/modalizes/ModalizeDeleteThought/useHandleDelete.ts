import { IThought } from '../../../types'
import useDeleteThought from '../../../services/useDeleteThought'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useHandleDelete(thought: IThought) {
    const deleteThought = useDeleteThought(thought)
    const navigation = useNavigation()

    async function handleDelete() {
        if (thought.secure) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                await deleteThought()

                Toast.show({
                    type: 'error',
                    text1: 'Pensamento excluído'
                })

                navigation.navigate('Home')
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Autenticação falhou'
                })
            }
        } else {
            await deleteThought()

            Toast.show({
                type: 'error',
                text1: 'Pensamento excluído'
            })

            navigation.navigate('Home')
        }
    }

    return handleDelete
}

export default useHandleDelete