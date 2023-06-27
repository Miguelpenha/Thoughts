import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useThoughts from '../../services/useThoughts'
import * as LocalAuthentication from 'expo-local-authentication'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

function useExportThoughts(modalize: RefObject<IHandles>) {
    const thoughts = useThoughts()

    async function exportThoughts() {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            await Clipboard.setStringAsync(JSON.stringify(thoughts))

            Toast.show({
                type: 'success',
                text1: 'Pensamentos exportados para a área de transferência'
            })

            modalize.current.close()
        } else {
            Toast.show({
                type: 'error',
                text1: 'Autenticação falhou'
            })
        }
    }

    return exportThoughts
}

export default useExportThoughts