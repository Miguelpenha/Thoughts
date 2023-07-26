import { IThought } from '../../../../../types'
import { FC } from 'react'
import useText from './useText'
import { FadeInDown } from 'react-native-reanimated'
import { Container } from './style'

interface IProps {
    groups: string[]
    thoughts: IThought[]
}

const Message: FC<IProps> = ({ groups, thoughts }) => {
    const text = useText(groups, thoughts)
    const animation = FadeInDown.duration(300).delay(100)

    if (!groups.length || !thoughts.length) {
        return (
            <Container entering={animation}>
                Ainda não há {text} cadastrados
            </Container>
        )
    } else {
        return null
    }
}

export default Message