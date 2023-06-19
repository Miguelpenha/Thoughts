import { Theme } from '@react-navigation/native'
import theme from '../theme'

const themeRouter: Theme = {
    dark: true,
    colors: {
        text: theme.color,
        border: theme.color,
        card: theme.primary,
        primary: theme.primary,
        notification: theme.secondary,
        background: theme.backgroundColor,
    }
}

export default themeRouter