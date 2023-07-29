import { FC, useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import useHandleSubmit from './useHandleSubmit'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import Animated from 'react-native-reanimated'
import Switch from '../../../components/Switch'
import ButtonSubmit from '../../../components/buttons/ButtonSubmit'
import Icon from '../../../components/Icon'
import { IThought } from '../../../types'

interface IProps {
    icon: string
    group: string
    QRCode?: string
    thought: IThought
}

const Form: FC<IProps> = ({ QRCode, icon, group, thought }) => {
    const [name, setName] = useState(thought.name)
    const [text, setText] = useState(QRCode || thought.text || '')
    const [secure, setSecure] = useState(thought.secure)
    const theme = useTheme()
    const handleSubmit = useHandleSubmit(thought, name, text, secure, icon, group)

    useEffect(() => {
        if (QRCode) {
            setText(QRCode)
        }
    }, [QRCode])

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
            <ButtonSubmit directionIcon="right" loading title="Editar" onPress={handleSubmit}>
                <Icon name="arrow-forward-ios" size={25} directionIcon="right"/>
            </ButtonSubmit>
        </Container>
    )
}

export default Form