import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { IOption } from './type'
import useShowQRCode from '../../hooks/useShowQRCode'

function useOptions(modalize: RefObject<IHandles>, modalizeDelete: RefObject<IHandles>, modalizeQRCode: RefObject<IHandles>): IOption[] {
    const showQRCode = useShowQRCode(false)
    
    return [
        {
            type: 'delete',
            icon: 'delete',
            title: 'Excluir',
            onPress: async () => {
                modalize.current.close()

                modalizeDelete.current.open()
            }
        },
        {
            title: 'QR code',
            icon: 'qr-code-2',
            onPress: async () => {
                const isShow = await showQRCode()
                
                if (isShow) {
                    modalize.current.close()

                    modalizeQRCode.current.open()
                }
            }
        },
    ]
}

export default useOptions