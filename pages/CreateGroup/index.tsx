import { useNavigation, useRoute } from '@react-navigation/native'
import useHandleSubmit from './useHandleSubmit'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import Form from '../../components/FormGroup'

interface IParams {
    QRCode?: string
}

function CreateGroup() {
    const navigation = useNavigation()
    const params = useRoute().params as IParams
    const handleSubmit = useHandleSubmit()

    return (
        <Container>
            <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                page: 'CreateGroup'
            })}>Criar grupo</HeaderBack>
            <Form titleConfirm="Confirmar" QRCode={params ? params.QRCode : undefined} handleSubmit={handleSubmit}/>
        </Container>
    )
}

export default CreateGroup