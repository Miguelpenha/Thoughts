import IThought from '../../types/thought'
import { FC } from 'react'
import useOnPress from './useOnPress'
import useAnimation from './useAnimation'
import { Container, Icon, Name, IconNext } from './style'
import { FadeInUp } from 'react-native-reanimated'

interface IProps {
    index: number
    thought: IThought
    onLongPress: () => void
}

const Thought: FC<IProps> = ({ index, thought, onLongPress }) => {
    const onPress = useOnPress(thought)
    const animation = useAnimation(onPress)

    return (
        <Container onLongPress={onLongPress} entering={FadeInUp.duration(200).delay(600+(50*index))} activeOpacity={0.5} {...animation}>
            <Icon size={30} name={thought.icon}/>
            <Name>{thought.name}</Name>
            <IconNext size={30} name={thought.secure ? 'lock' : 'arrow-forward-ios'}/>
        </Container>
    )
}

export default Thought