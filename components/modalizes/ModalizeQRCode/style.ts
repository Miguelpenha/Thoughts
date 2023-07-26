import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import QRCodeRaw from 'react-native-qrcode-styled'

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