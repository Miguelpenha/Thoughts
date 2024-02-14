import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
    width: 75%;
    padding: 4%;
    margin: 2% auto;
    align-items: center;
    flex-direction: row;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Label = styled.Text`
    width: 80%;
    text-align: left;
    font-weight: 500;
    font-size: ${RFPercentage(2.4)}px;
    color: ${props => props.theme.primary};
`

export const SwitchRaw = styled.Switch`
    margin-left: auto;
`