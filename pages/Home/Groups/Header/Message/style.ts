import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.Text)`
    width: 90%;
    padding: 4%;
    margin-top: 20%;
    font-weight: 500;
    text-align: center;
    align-self: center;
    border-radius: 15px;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`