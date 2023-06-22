import { FC, useState } from 'react'
import { useTheme } from 'styled-components'
import useHandleSubmit from './useHandleSubmit'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import Animated from 'react-native-reanimated'
import Switch from '../../../components/Switch'
import ButtonSubmit from '../../../components/buttons/ButtonSubmit'

interface IProps {
    icon: string
}

const Form: FC<IProps> = ({ icon }) => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [secure, setSecure] = useState(true)
    const theme = useTheme()
    const handleSubmit = useHandleSubmit(name, text, secure, icon)

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Nome</Label>
                <Input
                    value={name}
                    placeholder="Nome..."
                    onChangeText={setName}
                    cursorColor={theme.primary}
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Label>Texto</Label>
                <Input
                    multiline
                    value={text}
                    placeholder="Texto..."
                    onChangeText={setText}
                    cursorColor={theme.primary}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <Animated.View entering={FadeInDown.delay(500).duration(400)}>
                <Switch label="Seguro" setValue={setSecure} value={secure}/>
            </Animated.View>
            <ButtonSubmit loading title="Confirmar" onPress={handleSubmit}/>
        </Container>
    )
}

export default Form