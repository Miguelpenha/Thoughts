import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { ActivityIndicator } from 'react-native'

export const LoadingRaw = styled(Animated.createAnimatedComponent(ActivityIndicator))`
    margin: auto;
`