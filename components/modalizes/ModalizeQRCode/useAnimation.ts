import { useSharedValue, withTiming, useAnimatedStyle, ZoomIn } from 'react-native-reanimated'

function useAnimation(position: 'initial' | 'top') {
    const scale = useSharedValue(1)
    const margin = useSharedValue(10)
    const animationInitial = ZoomIn.duration(400).delay(300)

    const animatedStyle = useAnimatedStyle(() => {
        if (position === 'initial') {
            margin.value = withTiming(10, {
                duration: 300
            })

            scale.value = withTiming(1, {
                duration: 300
            })
        } else if (position === 'top') {
            margin.value = withTiming(30, {
                duration: 300
            })

            scale.value = withTiming(1.6, {
                duration: 300
            })
        }

        return {
            marginTop: `${margin.value}%`,
            marginBottom: `${margin.value}%`,
            transform: [{ scale: scale.value }]
        }
    }, [position])

    return { style: animatedStyle, entering: animationInitial }
}

export default useAnimation