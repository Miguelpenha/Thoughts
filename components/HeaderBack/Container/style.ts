import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

const styleContainer = css`
    padding-top: 13%;
    flex-direction: row;
`

export const ContainerView = styled(Animated.View)`
    ${styleContainer}
`

export const ContainerTouchable = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    ${styleContainer}
`