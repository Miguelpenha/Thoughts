import { TouchableOpacityProps } from'react-native'
import { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated'

function useAnimation(onPress: Function): TouchableOpacityProps {
    const scale = useSharedValue(1)

    const animation = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animation,
        onPressIn() {
            scale.value = withTiming(0.85)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.85, {
                    duration: 200
                }),
                withTiming(1, {
                    duration: 200
                })
            )

            onPress()
        }
    }
}

export default useAnimation