import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IInputRaw {
    secret: boolean
}

export const InputRaw = styled(Animated.createAnimatedComponent(TextInput))<IInputRaw>`
    padding: 4%;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.color};
    width: ${props => props.secret ? 83 : 100}%;
    background-color: ${props => props.theme.backgroundColor};
`