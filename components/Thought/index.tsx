import { IThought } from '../../types'
import { FC } from 'react'
import { Container, Author, Text, Tags, ContainerTag, Tag } from './style'
import limitText from '../../utils/limitText'
import Link from 'next/link'
import Skeleton from 'react-content-loader'

interface Iprops {
    thought: IThought
    onClick: Function
}

const Thought: FC<Iprops> = ({ thought, onClick }) => {
    if (thought) {
        return (
            <Container onClick={() => onClick()}>
                <Link href={`authors/${thought.author}`} passHref>
                    <Author>{thought.author}</Author>
                </Link>
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
    } else {
        return (
            <Skeleton 
                speed={2}
                width={476}
                height={124}
                viewBox="-100 0 476 124"
                backgroundColor="#d4d4d4"
                foregroundColor="#a3a3a3"
            >
                <rect x="0" y="5" rx="5" ry="5" width="68" height="19" /> 
                <rect x="0" y="35" rx="5" ry="5" width="198" height="13" /> 
                <rect x="0" y="58" rx="5" ry="5" width="169" height="13" /> 
                <rect x="0" y="84" rx="5" ry="5" width="49" height="14" /> 
                <rect x="60" y="84" rx="5" ry="5" width="49" height="14" /> 
                <rect x="120" y="84" rx="5" ry="5" width="49" height="14" />
            </Skeleton>
        )
    }
}

export default Thought