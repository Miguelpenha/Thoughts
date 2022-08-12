import { IThought } from '../../types'
import { FC } from 'react'
import { Container, Author, Text } from './style'
import limitText from '../../utils/limitText'

interface Iprops {
    thought: IThought
}

const Thought: FC<Iprops> = ({ thought }) => {
    return (
        <Container>
            <Author>{thought.author}</Author>
            <Text>{limitText(thought.text, 100)}</Text>
        </Container>
    )
}

export default Thought