import { AnimatedProps, useSharedValue, useAnimatedStyle, withTiming, FadeInDown } from 'react-native-reanimated'
import { TextInputProps } from 'react-native'

function useAnimationInputSearch(): AnimatedProps<TextInputProps> {
    const border = useSharedValue(18)

    const animation = useAnimatedStyle(() => ({
        borderRadius: border.value
    }))

    return {
        entering: FadeInDown.delay(400).duration(400),
        style: [animation],
        onFocus() {
            border.value = withTiming(8)
        },
        onBlur() {
            border.value = withTiming(18)
        }
    }
}

export default useAnimationInputSearch