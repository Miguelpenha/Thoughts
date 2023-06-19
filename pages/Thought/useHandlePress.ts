import { IThought } from '../../types'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

function useHandlePress(thought: IThought) {
    async function handlePress() {
        await Clipboard.setStringAsync(thought.text)

        Toast.show({
            type: 'success',
            text1: 'Texto copiado'
        })
    }

    return handlePress
}

export default useHandlePress