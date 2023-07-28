import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Container, Text } from './style'
import { FadeInDown } from 'react-native-reanimated'

interface IProps {
    group: string
    modalize: RefObject<IHandles>
}

const SelectedGroup: FC<IProps> = ({ modalize, group }) => {
    return (
        <Container entering={FadeInDown.delay(300).duration(400)} activeOpacity={0.5} onPress={() => modalize.current.open()}>
            <Text>Grupo {group}</Text>
        </Container>
    )
}

export default SelectedGroup