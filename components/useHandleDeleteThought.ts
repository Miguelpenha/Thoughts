import { IThought } from '../types'
import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useDeleteThought from '../services/useDeleteThought'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useHandleDeleteThought(thought: IThought, modalize: RefObject<IHandles>, next: boolean=true) {
    const deleteThought = useDeleteThought(thought)
    const navigation = useNavigation()

    async function handleDeleteThought() {
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

                next ? navigation.navigate('Home') : modalize.current.close()
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

            next ? navigation.navigate('Home') : modalize.current.close()
        }
    }

    return handleDeleteThought
}

export default useHandleDeleteThought