import { IThought } from '../../types'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

function useHandleLongPress(thought: IThought) {
    async function handleLongPress() {
        await Clipboard.setStringAsync(thought.text)

        Toast.show({
            type: 'success',
            text1: 'Texto copiado'
        })
    }

    return handleLongPress
}

export default useHandleLongPress