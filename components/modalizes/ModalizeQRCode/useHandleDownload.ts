import { MutableRefObject, RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Svg } from 'react-native-svg'
import { captureRef } from 'react-native-view-shot'
import * as MediaLibrary from 'expo-media-library'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

function useHandleDownload(refQRCode: MutableRefObject<Svg>, modalize: RefObject<IHandles>) {
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

    async function handleDownload(permission: boolean=false) {
        if (!permissionResponse.granted && !permission) {
            const { granted } = await requestPermission()
            
            if (granted) {
                await handleDownload(true)
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Permissão negada'
                })
            }
        } else {
            const URI = await captureRef(refQRCode, {
                format: 'png',
                fileName: 'qr-code'
            })
        
            await MediaLibrary.saveToLibraryAsync(URI)
    
            modalize.current.close()
    
            Toast.show({
                type: 'success',
                text1: 'QRCode baixado com sucesso'
            })
        }
    }

    return handleDownload
}

export default useHandleDownload