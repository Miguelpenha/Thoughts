import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Animated from 'react-native-reanimated'

export const Content = styled.View`
    padding-top: 13%;
    flex-direction: row;
`

export const ContainerIcon = styled.TouchableOpacity`
    margin-left: 4%;
    margin-right: 2%;
    align-self: center;
`

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.primary};
`

export const ContainerIconRight = styled.TouchableOpacity`
    margin-right: 4%;
    margin-left: auto;
    align-self: center;
`

export const Line = styled(Animated.View)`
    margin-top: 1.5%;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`