import * as DocumentPicker from 'expo-document-picker'
import { scanFromURLAsync, Constants } from 'expo-barcode-scanner'
import Toast from 'react-native-toast-message'

function useHandleSelectQRCode(readQRCode: Function) {
    async function handleSelectQRCode() {
        const { assets } = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            multiple: false,
            copyToCacheDirectory: true
        })

        if (assets) {
            const uri = assets[0].uri

            const [QRCode] = await scanFromURLAsync(uri, [Constants.BarCodeType.qr])

            if (QRCode) {
                const { data } = QRCode

                readQRCode({ data })
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'QRCode não identificado'
                })
            }
        }
    }

    return handleSelectQRCode
}

export default useHandleSelectQRCode