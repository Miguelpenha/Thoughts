import { SharedValue, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function events(scale: SharedValue<number>, onPress: () => void): TouchableOpacityProps {
    return {
        onPressIn() {
            scale.value = withTiming(0.9)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.9, {
                    duration: 150
                }),
                withTiming(1, {
                    duration: 150
                })
            )

            setTimeout(onPress, 150)
        }
    }
}

export default events