import IThought from '../../types/thought'
import { FC } from 'react'
import useOnPress from './onPress'
import useAnimation from './useAnimation'
import { Container, Icon, Name, IconNext } from './style'
import { FadeInUp } from 'react-native-reanimated'

interface IProps {
    index: number
    thought: IThought
}

const Thought: FC<IProps> = ({ index, thought }) => {
    const onPress = useOnPress(thought)
    const animation = useAnimation(onPress)

    return (
        <Container entering={FadeInUp.duration(200).delay(400+(50*index))} activeOpacity={0.5} {...animation}>
            <Icon size={30} name={thought.icon}/>
            <Name>{thought.name}</Name>
            <IconNext size={40} name="chevron-right"/>
        </Container>
    )
}

export default Thought