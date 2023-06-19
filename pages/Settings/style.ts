import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '../../components/Button'

export const Container = styled.View`
    margin-top: 5%;
`

export const ContainerData = styled.TouchableOpacity`
    width: 90%;
    margin-top: 5%;
    align-self: center;
`

export const Label = styled(Animated.Text)`
    font-weight: bold;
    margin-bottom: 1%;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.secondary};
`

export const Data = styled(Animated.Text)`
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const ButtonLogout = styled(Button)`
    margin-top: 15%;
`