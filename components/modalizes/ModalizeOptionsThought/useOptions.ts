import { IThought } from '../../../types'
import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { IOption } from './type'
import useNavigateVerified from '../../hooks/useNavigateVerified'
import useShowQRCode from '../../hooks/useShowQRCode'
import useShareThought from '../../hooks/useShareThought'
import useChangeSecure from '../../hooks/useChangeSecure'

function useOptions(thought: IThought, modalize: RefObject<IHandles>, modalizeQRCode: RefObject<IHandles>, modalizeDelete: RefObject<IHandles>): IOption[] {
    const navigateVerified = useNavigateVerified()
    const showQRCode = useShowQRCode(thought)
    const shareThought = useShareThought(thought)
    const changeSecure = useChangeSecure(thought)

    return [
        {
            icon: 'edit',
            title: 'Editar',
            onPress: async () => {
                const isSuccess = await navigateVerified('EditThought', {
                    thoughtID: thought.id
                }, thought.secure)

                if (isSuccess) {
                    modalize.current.close()
                }
            }
        },
        {
            icon: 'qr-code-2',
            title: 'QR code',
            onPress: async () => {
                const isShow = await showQRCode()
                
                if (isShow) {
                    modalize.current.close()

                    modalizeQRCode.current.open()
                }
            }
        },
        {
            icon: 'lock',
            title: 'Segurança',
            onPress: async () => {
                modalize.current.close()

                await changeSecure()
            }
        },
        {
            icon: 'share',
            title: 'Compartilhar',
            onPress: async () => {
                modalize.current.close()

                setTimeout(shareThought, 200)
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