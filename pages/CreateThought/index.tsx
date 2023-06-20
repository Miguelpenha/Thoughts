import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { IconMenuIcons } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Form from './Form'

function CreateThought() {
    return (
        <>
            <Container>
                <HeaderBack>Criar pensamento</HeaderBack>
                <ButtonIcon onPress={() => {}}>
                    <IconMenuIcons size={RFPercentage(5)} name="book"/>
                </ButtonIcon>
                <Form/>
            </Container>
        </>
    )
}

export default CreateThought