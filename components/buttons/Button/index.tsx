import { AnimateProps } from 'react-native-reanimated'
import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native'
import { FC, useState } from 'react'
import useAnimation from './useAnimation'
import { Container, Text, Loading } from './style'

interface IProps extends AnimateProps<TouchableOpacityProps> {
    index?: number
    title?: string
    children?: any
    style?: ViewStyle
    loading?: boolean
    styleText?: TextStyle
    directionIcon?: 'left' | 'right'
    onPress: () => void | Promise<void>
}

const Button: FC<IProps> = ({ index=1, loading=false, onPress, style, children, directionIcon='left', styleText, title, ...props }) => {
    const animation = useAnimation(index, handlePress, style)
    const [loadingState, setLoadingState] = useState(false)

    async function handlePress() {
        loading && setLoadingState(true)

        await onPress()

        loading && setLoadingState(false)
    }
    
    return (
        <Container disabled={loadingState} {...animation} {...props}>
            {directionIcon === 'left' && (loadingState ? <Loading size={35}/> : children)}
            <Text style={styleText}>{title}</Text>
            {directionIcon === 'right' && (loadingState ? <Loading size={35}/> : children)}
        </Container>
    )
}

export default Button