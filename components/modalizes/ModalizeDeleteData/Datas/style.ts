import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    margin-bottom: 5%;
    align-self: center;
`

export const Data = styled(Animated.Text)`
    margin: 1%;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.error};
`