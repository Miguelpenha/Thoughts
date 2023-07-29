import { INavigation } from '../../types'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { BarCodeEvent } from 'expo-barcode-scanner'
import Toast from 'react-native-toast-message'

function useReadQRCode(page: keyof INavigation) {
    const [QRCode, setQRCode] = useState<string>()
    const navigation = useNavigation()

    useEffect(() => {
        if (QRCode) {
            navigation.navigate({
                name: page,
                merge: true,
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