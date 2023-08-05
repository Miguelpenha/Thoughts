import { RefObject, FC, useRef } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import useAnimation from './useAnimation'
import { Svg } from 'react-native-svg'
import useHandleDownload from './useHandleDownload'
import { ButtonDownload, IconDownload, Container, QRCode } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '../../buttons/Button'
import Icon from '../../Icon'

interface IProps {
    text: string
    position: 'initial' | 'top' 
    modalize: RefObject<IHandles>
}

const ModalizeQRCode: FC<IProps> = ({ position, text, modalize }) => {
    const theme = useTheme()
    const animation = useAnimation(position)
    const refQRCode = useRef<Svg>(null)
    const handleDownload = useHandleDownload(refQRCode, modalize)

    return <>
        <ButtonDownload onPress={handleDownload}>
            <IconDownload name="file-download" size={RFPercentage(6)}/>
        </ButtonDownload>
        <Container {...animation}>
            <QRCode
                data={text}
                padding={20}
                ref={refQRCode}
                pieceScale={1.04}
                color={theme.primary}
                errorCorrectionLevel="H"
                pieceSize={RFPercentage(0.9)}
                logo={{
                    scale: 1,
                    hidePieces: false,
                    href: require('../../../assets/icon-qr.png')
                }}
            />
        </Container>
        <Button title="Voltar" index={1} onPress={modalize.current.close}>
            <Icon name="arrow-back-ios" size={30}/>
        </Button>
    </>
}

export default ModalizeQRCode