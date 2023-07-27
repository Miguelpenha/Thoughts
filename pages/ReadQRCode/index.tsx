import useReadQRCode from './useReadQRCode'
import useHandleSelectQRCode from './useHandleSelectQRCode'
import usePermission from './usePermission'
import { FadeIn, ZoomIn } from 'react-native-reanimated'
import Container from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Title, Square } from './style'
import { View, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

function ReadQRCode() {
    const { readQRCode } = useReadQRCode()
    const handleSelectQRCode = useHandleSelectQRCode(readQRCode)
    const permission = usePermission()
    const animationTitle = FadeIn.duration(300).delay(200)
    const animationSquare = ZoomIn.duration(500).delay(600)

    return (
        <Container>
            <HeaderBack right iconRight="file-upload" onPressRight={handleSelectQRCode}>Ler QRCode</HeaderBack>
            {permission && (
                <View style={{ flex: 1 }}>
                    <Title entering={animationTitle}>Posicione o QRCode</Title>
                    <Square entering={animationSquare} style={StyleSheet.absoluteFillObject}/>
                    <BarCodeScanner
                        onBarCodeScanned={readQRCode}
                        style={[StyleSheet.absoluteFillObject]}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    />
                </View>
            )}
        </Container>
    )
}

export default ReadQRCode