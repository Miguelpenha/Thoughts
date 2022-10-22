import { IThought } from '../../../../types'
import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Container, Author, Text, Tags, ContainerTag, Tag } from './style'
import limitText from '../../../../utils/limitText'
import Link from 'next/link'
import 'react-loading-skeleton/dist/skeleton.css'

interface Iprops {
    thought: IThought
    onClick: Function
}

const Thought: FC<Iprops> = ({ thought, onClick }) => {
    return (
        <SkeletonTheme baseColor="#c7c7c7" highlightColor="#9a9a9a">
            <Container onClick={ev => {
                ev.stopPropagation()
                ev.cancelable = true

                onClick()
            }}>
                {thought.author ? (
                    <Link href={`authors/${thought.author}`} passHref>
                        <Author onClick={ev => {
                            ev.stopPropagation()
                            ev.cancelable = true
                        }}>{thought.author}</Author>
                    </Link>
                ) : (
                    <Skeleton height={20} style={{width: '45%', marginBottom: '8%'}}/>
                )}
                <Text>{limitText(thought.text, 100) || <Skeleton height={12} count={3}/>}</Text>
                <Tags>
                    {thought.tags ? thought.tags.map((tag, index) => (
                        <Link key={index} href={`tags/${tag}`} passHref>
                            <ContainerTag onClick={ev => {
                                ev.stopPropagation()
                                ev.cancelable = true
                            }}>
                                <Tag>#{tag}</Tag>
                            </ContainerTag>
                        </Link>
                    )) : (
                        <div>
                            <Skeleton inline={true} height={20} style={{width: '28%', marginRight: '5%'}}/>
                            <Skeleton inline={true} height={20} style={{width: '28%', marginRight: '5%'}}/>
                            <Skeleton inline={true} height={20} style={{width: '28%', marginRight: '5%'}}/>
                        </div>
                    )}
                </Tags>
            </Container>
        </SkeletonTheme>
    )
}

export default Thought