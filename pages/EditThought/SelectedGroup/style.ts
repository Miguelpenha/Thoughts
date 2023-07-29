import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 75%;
    padding: 5%;
    margin-top: 4%;
    margin-bottom: 10%;
    align-self: center;
    border-radius: 20px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled.Text`
    font-weight: 500;
    align-self: center;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`