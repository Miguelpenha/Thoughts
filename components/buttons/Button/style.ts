import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import LoadingRaw from '../../Loading'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 60%;
    margin: 7%;
    padding: 5.5%;
    align-self: center;
    border-radius: 15px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.primary};
`

export const Loading = styled(LoadingRaw)`
    margin: 0;
    margin-right: 10%;
`