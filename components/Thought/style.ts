import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    margin: 3%;
    padding: 3%;
    align-self: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.secondary};
`

export const Icon = styled(MaterialIcons)`
    align-self: center;
    color: ${props => props.theme.primary};
`

export const Name = styled.Text`
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const IconNext = styled(MaterialIcons)`
    align-self: center;
    color: ${props => props.theme.primary};
`