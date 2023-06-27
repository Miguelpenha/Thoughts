import { IThought } from '../../types'
import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useDeleteThoughtService from '../../services/useDeleteThought'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useDeleteThought(thought: IThought, modalize: RefObject<IHandles>, next: boolean=true) {
    const deleteThoughtService = useDeleteThoughtService(thought)
    const navigation = useNavigation()

    async function deleteThought() {
        if (thought.secure) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                await deleteThoughtService()

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
            await deleteThoughtService()

            Toast.show({
                type: 'error',
                text1: 'Pensamento excluído'
            })

            next ? navigation.navigate('Home') : modalize.current.close()
        }
    }

    return deleteThought
}

export default useDeleteThought