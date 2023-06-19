import IThought from '../../types/thought'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAnimation from './useAnimation'
import { Container, Icon, Name, IconNext } from './style'

interface IProps {
    thought: IThought
}

const Thought: FC<IProps> = ({ thought }) => {
    const navigation = useNavigation()
    const animation = useAnimation(() => navigation.navigate('Thought', { thoughtID: thought.id }))

    return (
        <Container activeOpacity={0.5} {...animation}>
            <Icon size={30} name={thought.icon}/>
            <Name>{thought.name}</Name>
            <IconNext size={40} name="chevron-right"/>
        </Container>
    )
}

export default Thought