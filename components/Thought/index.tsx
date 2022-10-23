import { IThought } from '../../types'
import { FC } from 'react'
import { Container, Author, Text, Tags, ContainerTag, Tag } from './style'
import limitText from '../../utils/limitText'
import Link from 'next/link'

interface Iprops {
    thought: IThought
    onClick: () => void
}

const Thought: FC<Iprops> = ({ onClick, thought }) => {
    return (
        <Container onClick={ev => {
            ev.stopPropagation()
            ev.cancelable = true

            onClick()
        }}>
            <Link href={`authors/${thought.author}`} passHref>
                <Author onClick={ev => {
                    ev.stopPropagation()
                    ev.cancelable = true
                }}>{thought.author}</Author>
            </Link>
            <Text>{limitText(thought.text, 100)}</Text>
            <Tags>
                {thought && thought.tags && thought.tags.map((tag, index) => (
                    <Link key={index} href={`tags/${tag}`} passHref>
                        <ContainerTag onClick={ev => {
                            ev.stopPropagation()
                            ev.cancelable = true
                        }}>
                            <Tag>#{tag}</Tag>
                        </ContainerTag>
                    </Link>
                ))}
            </Tags>
        </Container>
    )
}

export default Thought