import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    height: 100%;
`

export const InputSearch = styled(Animated.createAnimatedComponent(TextInput))`
    width: 90%;
    padding: 3%;
    margin-bottom: 3%;
    align-self: center;
    border-radius: 10px;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`