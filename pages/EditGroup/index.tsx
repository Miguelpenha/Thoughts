import { useNavigation, useRoute } from '@react-navigation/native'
import useHandleSubmit from './useHandleSubmit'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import Form from '../../components/FormGroup'

interface IParams {
    group: string
    QRCode?: string
}

function EditGroup() {
    const navigation = useNavigation()
    const params = useRoute().params as IParams
    const handleSubmit = useHandleSubmit()

    if (params.group) {
        return (
            <Container>
                <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                    page: 'EditGroup'
                })}>Editar grupo</HeaderBack>
                <Form nameDefault={params.group} titleConfirm="Editar" QRCode={params ? params.QRCode : undefined} handleSubmit={async name => await handleSubmit(name, params.group)}/>
            </Container>
        )
    } else {
        return null
    }
}

export default EditGroup