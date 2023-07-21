import { MaterialIcons } from '@expo/vector-icons'

interface IThought {
    id: string
    name: string
    text: string
    group?: string
    secure: boolean
    icon: keyof typeof MaterialIcons.glyphMap
}

export default IThought