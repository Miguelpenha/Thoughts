import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

export const Title = styled(Animated.Text)`
    margin-top: 7%;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Square = styled(Animated.View)`
    z-index: 4;
    border-radius: 10px;
    width: ${RFPercentage(40)}px;
    height: ${RFPercentage(40)}px;
    border: 6px solid ${props => props.theme.primary};
    margin-top: ${(Dimensions.get('window').height/2)-RFPercentage(25)}px;
    margin-left: ${(Dimensions.get('window').width/2)-RFPercentage(20)}px;
`