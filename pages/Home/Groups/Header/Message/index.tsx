import { IThought } from '../../../../../types'
import { FC } from 'react'
import useText from './useText'
import { Container } from './style'

interface IProps {
    groups: string[]
    thoughts: IThought[]
}

const Message: FC<IProps> = ({ groups, thoughts }) => {
    const text = useText(groups, thoughts)

    if (!groups.length || !thoughts.length) {
        return (
            <Container>Ainda não há {text} cadastrados</Container>
        )
    } else {
        return null
    }
}

export default Message