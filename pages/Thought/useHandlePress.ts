import { IThought } from '../../types'
import { Dispatch, SetStateAction } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useHandlePress(thought: IThought, hidden: boolean, setHidden: Dispatch<SetStateAction<boolean>>) {
    async function handlePress() {
        if (thought.secure && hidden) {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar'
            })
    
            if (success) {
                setHidden(false)
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Autenticação falhou'
                })
            }
        } else {
            setHidden(!hidden)
        }
    }

    return handlePress
}

export default useHandlePress