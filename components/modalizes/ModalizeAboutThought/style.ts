import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
    margin-top: 5%;
`

export const ContainerData = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    display: flex;
    margin: 2.5% 5%;
    align-self: flex-start;
`

export const Data = styled.Text`
    font-weight: 500;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`