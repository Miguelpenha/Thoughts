import * as Updates from 'expo-updates'
import { green } from './colorsLogs'
import Toast from 'react-native-toast-message'

function useUpdateApp() {
    async function updateApp() {
        if (process.env.NODE_ENV === 'production') {
            const { isAvailable } = await Updates.checkForUpdateAsync()
            
            if (isAvailable) {
                console.log(green('>> Update Available'))

                await Updates.fetchUpdateAsync()

                Toast.show({
                    type: 'info',
                    autoHide: false,
                    text1: 'Clique aqui para atualizar o app',
                    async onPress() {
                      await Updates.reloadAsync()
                    }
                })

                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    return updateApp
}

export default useUpdateApp