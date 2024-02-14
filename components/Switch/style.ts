import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 75%;
    margin: 1% auto;
    align-items: center;
    flex-direction: row;
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