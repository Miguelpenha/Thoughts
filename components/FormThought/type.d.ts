import { IThought } from '../../types'
import { RefObject, Dispatch, SetStateAction } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'

interface IProps {
    icon: string
    group: string
    QRCode?: string
    thought?: IThought
    titleSubmit: string
    initialData: boolean
    modalizeMenuIcons: RefObject<IHandles>
    setGroup: Dispatch<SetStateAction<string>>
    onSubmit: (name: string, text: string, secure: boolean) => Promise<void>
}