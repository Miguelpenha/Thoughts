import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { IOption } from './type'
import useShowQRCode from '../../hooks/useShowQRCode'
import useNavigateVerified from '../../hooks/useNavigateVerified'

function useOptions(modalize: RefObject<IHandles>, group: string, modalizeQRCode: RefObject<IHandles>, modalizeDelete: RefObject<IHandles>): IOption[] {
    const showQRCode = useShowQRCode(false)
    const navigationVerified = useNavigateVerified()
    
    return [
        {
            icon: 'edit',
            title: 'Editar',
            onPress: async () => {
                const success = await navigationVerified('EditGroup', {
                    group
                })

                if (success) {
                    modalize.current.close()
                } else {
                    
                }
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
        {
            type: 'delete',
            icon: 'delete',
            title: 'Excluir',
            onPress: async () => {
                modalize.current.close()

                modalizeDelete.current.open()
            }
        }
    ]
}

export default useOptions