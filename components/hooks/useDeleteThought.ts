import { IThought, INavigation } from '../../types'
import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useDeleteThoughtService from '../../services/useDeleteThought'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useDeleteThought(thought: IThought, modalize: RefObject<IHandles>, next?: keyof INavigation) {
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

                if (next) {
                    modalize.current.close()
                
                    navigation.navigate({
                        name: next,
                        merge: true
                    } as any)
                } else {
                    modalize.current.close()
                }
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

            if (next) {
                modalize.current.close()
                
                navigation.navigate({
                    name: next,
                    merge: true
                } as any)
            } else {
                modalize.current.close()
            }
        }
    }

    return deleteThought
}

export default useDeleteThought