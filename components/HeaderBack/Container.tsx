import { FC } from 'react'
import Animated from 'react-native-reanimated'
import { FadeInUp } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

interface IProps {
    children: any
    onPress: () => void
    type: 'view' | 'touchable'
}

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity)

const Container: FC<IProps> = ({ type, children, onPress }) => {
    if (type === 'view') {
        return (
            <Animated.View entering={FadeInUp}>
                {children}
            </Animated.View>
        )
    } else if (type === 'touchable') {
        return (
            <TouchableOpacityAnimated onPress={onPress} entering={FadeInUp} activeOpacity={0.5}>
                {children}
            </TouchableOpacityAnimated>
        )
    }
}

export default Container