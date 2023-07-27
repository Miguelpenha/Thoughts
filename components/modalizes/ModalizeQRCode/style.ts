import styled from 'styled-components/native'
import ButtonIcon from '../../buttons/ButtonIcon'
import { MaterialIcons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import QRCodeRaw from 'react-native-qrcode-styled'

export const ButtonDownload = styled(ButtonIcon)`
    margin-bottom: 0%;
`

export const IconDownload = styled(MaterialIcons)`
    position: absolute;
    color: ${props => props.theme.primary};
`

interface IQRCode {
    errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'
}

export const Container = styled(Animated.View)`
    align-self: center;
`

export const QRCode = styled(Animated.createAnimatedComponent(QRCodeRaw))<IQRCode>`
    padding: 2%;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`