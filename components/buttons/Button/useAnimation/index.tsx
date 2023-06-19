import { ViewStyle, TouchableOpacityProps } from 'react-native'
import { AnimateProps, FadeInDown } from 'react-native-reanimated'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimation(index: number, onPress: () => void, style: ViewStyle): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animationScale = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        activeOpacity: 0.5,
        ...events(scale, onPress),
        style: [animationScale, style],
        entering: FadeInDown.delay((index*100)+200).duration(400)
    }
}

export default useAnimation