import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 80%;
    margin: 1% auto;
    align-items: center;
    flex-direction: row;
`

export const Label = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const SwitchRaw = styled.Switch`
    margin-right: 4%;
`