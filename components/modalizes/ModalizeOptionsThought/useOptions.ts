import { IThought } from '../../../types'
import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { IOption } from './type'
import useHandleShareThought from '../../useHandleShareThought'
import useHandleChangeSecure from '../../useHandleChangeSecure'

function useOptions(thought: IThought, modalize: RefObject<IHandles>, modalizeDelete: RefObject<IHandles>): IOption[] {
    const handleShareThought = useHandleShareThought(thought)
    const handleChangeSecure = useHandleChangeSecure(thought)

    return [
        {
            icon: 'edit',
            title: 'Editar',
            onPress: () => {},
        },
        {
            icon: 'qr-code-2',
            title: 'QR code',
            onPress: () => {}
        },
        {
            icon: 'lock',
            title: 'Tornar seguro',
            verify: thought => !thought.secure,
            onPress: async () => {
                modalize.current.close()

                await handleChangeSecure()
            }
        },
        {
            icon: 'share',
            title: 'Compartilhar',
            onPress: async () => {
                modalize.current.close()

                setTimeout(handleShareThought, 200)
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