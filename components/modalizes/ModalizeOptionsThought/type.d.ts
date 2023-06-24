export interface IOption {
    title: string
    onPress: () => void
    type?: 'primary' | 'delete'
    icon: keyof typeof MaterialIcons.glyphMap
}