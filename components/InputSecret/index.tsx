import { FC, useState } from 'react'
import { TextInputProps } from 'react-native'
import useAnimation from './useAnimation'
import { Container, ContainerIcon, Icon } from './style'
import Input from '../Input'

const InputSecret: FC<TextInputProps> = props => {
    const [hidden, setHidden] = useState(false)
    const animation = useAnimation(() => setHidden(!hidden))

    return (
        <Container>
            <ContainerIcon {...animation} activeOpacity={0.5}>
                <Icon name={`visibility${hidden ? '-off' : ''}`} size={25}/>
            </ContainerIcon>
            <Input {...props} secureTextEntry={!hidden}/>
        </Container>
    )
}

export default InputSecret