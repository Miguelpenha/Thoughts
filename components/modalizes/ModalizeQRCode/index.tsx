import { IThought } from '../../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import useAnimation from './useAnimation'
import { Container, QRCode } from './style'
import Button from '../../buttons/Button'
import Icon from '../../Icon'

interface IProps {
    thought: IThought
    position: 'initial' | 'top' 
    modalize: RefObject<IHandles>
}

const ModalizeQRCode: FC<IProps> = ({ position, thought, modalize }) => {
    const theme = useTheme()
    const animation = useAnimation(position)

    return <>
        <Container {...animation}>
            <QRCode
                padding={20}
                pieceSize={6}
                pieceScale={1.04}
                data={thought.text}
                color={theme.primary}
                errorCorrectionLevel="H"
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