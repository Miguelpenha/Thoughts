import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    align-self: center;
    flex-direction: row;
`

export const ContainerIcon = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    margin-right: 4%;
    align-self: center;
`

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`