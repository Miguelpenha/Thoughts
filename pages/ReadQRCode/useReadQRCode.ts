import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { BarCodeEvent } from 'expo-barcode-scanner'
import Toast from 'react-native-toast-message'

function useReadQRCode() {
    const [QRCode, setQRCode] = useState<string>()
    const navigation = useNavigation()

    useEffect(() => {
        if (QRCode) {
            navigation.navigate({
                merge: true,
                name: 'CreateThought',
                params: {
                    QRCode
                }
            } as any)

            Toast.show({
                type: 'success',
                text1: 'QRCode identificado com sucesso'
            })
        }
    }, [QRCode])

    return {
        readQRCode: (params: BarCodeEvent) => setQRCode(params.data)
    }
}

export default useReadQRCode