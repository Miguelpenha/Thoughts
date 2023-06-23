import { TouchableOpacityProps } from'react-native'
import { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated'

function useAnimation(onLongPress: Function, onPress: Function): TouchableOpacityProps {
    const scale = useSharedValue(1)

    const animation = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animation,
        onPressIn() {
            scale.value = withTiming(0.92)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.92, {
                    duration: 100
                }),
                withTiming(1, {
                    duration: 100
                })
            )

            onPress()
        },
        onLongPress() {
            onLongPress()
        }
    }
}

export default useAnimation