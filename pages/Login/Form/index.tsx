import { useState } from 'react'
import { useTheme } from 'styled-components'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import InputSecret from '../../../components/InputSecret'
import ButtonSubmit from '../../../components/buttons/ButtonSubmit'
import useHandleSubmit from './useHandleSubmit'
import Icon from '../../../components/Icon'

function Form() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const theme = useTheme()
    const handleSubmit = useHandleSubmit(name, password)

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Nome</Label>
                <Input
                    value={name}
                    autoComplete="name"
                    placeholder="Nome..."
                    onChangeText={setName}
                    cursorColor={theme.primary}
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Label>Senha</Label>
                <InputSecret
                    value={password}
                    placeholder="Senha..."
                    secureTextEntry={true}
                    autoComplete="password"
                    onChangeText={setPassword}
                    cursorColor={theme.primary}
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <ButtonSubmit loading title="Confirmar" onPress={handleSubmit} directionIcon="right">
                <Icon name="arrow-forward-ios" size={25} directionIcon="right"/>
            </ButtonSubmit>
        </Container>
    )
}

export default Form