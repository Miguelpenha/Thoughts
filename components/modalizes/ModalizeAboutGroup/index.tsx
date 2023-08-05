import { FC } from 'react'
import useCountThoughtsInGroup from '../../../services/useCountThoughtsInGroup'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'
import { Container, ContainerData, Data } from './style'
import { FadeInDown } from 'react-native-reanimated'

interface IProps {
    group: string
}

const ModalizeAboutGroup: FC<IProps> = ({ group }) => {
    const countThoughts = useCountThoughtsInGroup(group)

    async function handleCopy(data: string) {
        await Clipboard.setStringAsync(data)

        Toast.show({
            type: 'success',
            text1: 'Dado copiado para a área de transferência'
        })
    }

    if (countThoughts) {
        return (
            <Container>
                <ContainerData entering={FadeInDown.duration(200).delay(100)} onPress={async () => await handleCopy(group)}>
                    <Data>Nome: {group}</Data>
                </ContainerData>
                <ContainerData entering={FadeInDown.duration(200).delay(200)} onPress={async () => await handleCopy(String(countThoughts))}>
                    <Data>Quantidade de pensamentos: {countThoughts && countThoughts}</Data>
                </ContainerData>
            </Container>
        )
    } else {
        return null
    }
}

export default ModalizeAboutGroup