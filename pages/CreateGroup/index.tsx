import { useNavigation, useRoute } from '@react-navigation/native'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import Form from './Form'

interface IParams {
    QRCode?: string
}

function CreateGroup() {
    const navigation = useNavigation()
    const params = useRoute().params as IParams

    return (
        <>
            <Container>
                <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                    page: 'CreateGroup'
                })}>Criar grupo</HeaderBack>
                <Form QRCode={params ? params.QRCode : undefined}/>
            </Container>
        </>
    )
}

export default CreateGroup