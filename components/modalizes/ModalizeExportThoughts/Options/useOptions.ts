import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useThoughts from '../../../../services/useThoughts'
import * as LocalAuthentication from 'expo-local-authentication'
import { Share } from 'react-native'
import Toast from 'react-native-toast-message'
import * as Clipboard from 'expo-clipboard'

function useOptions(modalize: RefObject<IHandles>) {
    const thoughts = useThoughts()

    async function handleExport(action: 'share' | 'copy') {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            modalize.current.close()

            if (action === 'share') {
                setTimeout(async () => {
                    await Share.share({
                        message: JSON.stringify(thoughts)
                    })  
                }, 80)
            } else {
                await Clipboard.setStringAsync(JSON.stringify(thoughts))

                Toast.show({
                    type: 'success',
                    text1: 'Pensamentos exportados para a área de transferência'
                })
            }
        } else {
            Toast.show({
                type: 'error',
                text1: 'Autenticação falhou'
            })
        }
    }

    return {
        copy: async () => await handleExport('copy'),
        share: async () => await handleExport('share')
    }
}

export default useOptions