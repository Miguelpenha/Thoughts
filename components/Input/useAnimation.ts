import { TextStyle, TextInputProps } from 'react-native'
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

function useAnimation(style: TextStyle): TextInputProps {
    const border = useSharedValue(20)

    const animation = useAnimatedStyle(() => ({
        borderRadius: border.value
    }))

    return {
        style: [style, animation],
        onFocus() {
            border.value = withTiming(10)
        },
        onBlur() {
            border.value = withTiming(20)
        }
    }
}

export default useAnimation