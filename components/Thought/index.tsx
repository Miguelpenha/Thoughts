import { IThought } from '../../types'
import { FC } from 'react'
import { Container, Author, Text, Tags, ContainerTag, Tag } from './style'
import limitText from '../../utils/limitText'
import Link from 'next/link'

interface Iprops {
    thought: IThought
}

const Thought: FC<Iprops> = ({ thought }) => {
    return (
        <Container>
            <Author>{thought.author}</Author>
            <Text>{limitText(thought.text, 100)}</Text>
            <Tags>
                {thought.tags && thought.tags.map(tag => (
                    <Link href={`tags/${tag}`} passHref>
                        <ContainerTag>
                            <Tag>#{tag}</Tag>
                        </ContainerTag>
                    </Link>
                ))}
            </Tags>
        </Container>
    )
}

export default Thought