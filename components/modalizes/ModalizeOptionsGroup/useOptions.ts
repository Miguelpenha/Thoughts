import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { IOption } from './type'

function useOptions(modalize: RefObject<IHandles>, modalizeDelete: RefObject<IHandles>): IOption[] {
    return [
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