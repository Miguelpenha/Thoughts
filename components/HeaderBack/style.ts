import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
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

export const ContainerIconSettings = styled.TouchableOpacity`
    margin-right: 4%;
    margin-left: auto;
    align-self: center;
`

export const Line = styled(Animated.View)`
    bottom: -25%;
    position: absolute;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.primary};
`