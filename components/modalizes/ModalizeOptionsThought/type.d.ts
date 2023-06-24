import { IThought } from '../../../types'

export interface IOption {
    title: string
    onPress: () => void
    type?: 'primary' | 'delete'
    verify?: (thought: IThought) => boolean
    icon: keyof typeof MaterialIcons.glyphMap
}