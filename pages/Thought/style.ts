import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ContainerText = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 80%;
    padding: 4%;
    margin-top: 10%;
    align-self: center;
    border-radius: 15px;
    background-color: ${props => props.theme.secondary};
`

export const Text = styled.TextInput`
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const Options = styled.View`
    margin-top: 5%;
    flex-wrap: wrap;
    align-self: center;
    flex-direction: row;
    justify-content: center;
`

export const IconCancel = styled(MaterialIcons)`
    position: absolute;
    color: ${props => props.theme.color};
`

export const Icon = styled(MaterialIcons)`
    position: absolute;
    color: ${props => props.theme.primary};
`