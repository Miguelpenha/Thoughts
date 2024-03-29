import IThought from '../../types/thought'
import { FC } from 'react'
import useOnPress from './useOnPress'
import useAnimation from './useAnimation'
import { Container, Icon, Name, IconNext } from './style'
import { FadeInUp } from 'react-native-reanimated'

interface IProps {
    index: number
    group: string
    onLongPress: ()  => void
}

const Group: FC<IProps> = ({ group, index, onLongPress }) => {
    const onPress = useOnPress(group)
    const animation = useAnimation(onPress)

    return (
        <Container onLongPress={onLongPress} entering={FadeInUp.duration(200).delay(400+(50*index))} activeOpacity={0.5} {...animation}>
            <Icon size={30} name="workspaces-filled"/>
            <Name>{group}</Name>
            <IconNext size={30} name="arrow-forward-ios"/>
        </Container>
    )
}

export default Group