import { IThought } from '../../../types'
import { FC } from 'react'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'
import { Container, ContainerData, Data } from './style'


interface IProps {
    thought: IThought
}

const ModalizeAboutThought: FC<IProps> = ({ thought }) => {
    async function handleCopy(data: string) {
        await Clipboard.setStringAsync(data)

        Toast.show({
            type: 'success',
            text1: 'Dado copiado para a área de transferência'
        })
    }

    return (
        <Container>
            <ContainerData onPress={async () => await handleCopy(thought.name)}>
                <Data>Nome: {thought.name}</Data>
            </ContainerData>
            <ContainerData onPress={async () => await handleCopy(thought.group || 'Nenhum')}>
                <Data>Grupo: {thought.group || 'Nenhum'}</Data>
            </ContainerData>
            <ContainerData onPress={async () => await handleCopy(thought.secure ? 'Sim' : 'Não')}>
                <Data>Seguro: {thought.secure ? 'Sim' : 'Não'}</Data>
            </ContainerData>
        </Container>
    )
}

export default ModalizeAboutThought