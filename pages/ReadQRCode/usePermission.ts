import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState, useEffect } from 'react'
import Toast from 'react-native-toast-message'

function usePermission() {
    const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions()
    const [permission, setPermission] = useState(false)
    
    useEffect(() => {
        async function getPermission() {
            const { granted } = await requestPermission()

            if (granted) {
                setPermission(true)
            } else {
                setPermission(false)

                Toast.show({
                    type: 'error',
                    text1: 'Permissão negada'
                })
            }
        }

        if (!permissionResponse || !permissionResponse.granted) {
            getPermission().then()
        }
    }, [])

    return permission
}

export default usePermission