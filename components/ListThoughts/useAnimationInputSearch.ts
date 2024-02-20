import { TextInputProps } from 'react-native'
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

function useAnimationInputSearch(): TextInputProps {
    const border = useSharedValue(18)

    const animation = useAnimatedStyle(() => ({
        borderRadius: border.value
    }))

    return {
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