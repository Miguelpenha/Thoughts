import { Dispatch, SetStateAction } from 'react'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

function useHandlePaste(setThoughtsImported: Dispatch<SetStateAction<string>>) {
    async function handlePaste() {
        const thoughtsRaw = await Clipboard.getStringAsync({
            preferredFormat: Clipboard.StringFormat.PLAIN_TEXT
        })

        try {
            JSON.parse(thoughtsRaw)

            setThoughtsImported(thoughtsRaw)

            Toast.show({
                type: 'info',
                text1: 'Texto da área de transferência colado'
            })
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Texto inválido na área de transferência'
            })
        }
    }

    return handlePaste
}

export default useHandlePaste