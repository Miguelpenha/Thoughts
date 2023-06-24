import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { Dimensions } from'react-native'

function useAnimation() {
    const borderWidth = useSharedValue(0)

    const animation = useAnimatedStyle(() => ({
        width: borderWidth.value
    }))

    useFocusEffect(
        useCallback(() => {
            const width = Dimensions.get('screen').width

            borderWidth.value = 0
            borderWidth.value = withTiming(width, {
                duration: 600
            })
        }, [])
    )

    return animation
}

export default useAnimation