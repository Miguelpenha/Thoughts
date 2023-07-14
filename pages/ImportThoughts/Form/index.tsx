import { useState } from 'react'
import { useTheme } from 'styled-components'
import useHandleSubmit from './useHandleSubmit'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/buttons/ButtonSubmit'
import Icon from '../../../components/Icon'

function Form() {
    const [thoughtsImported, setThoughtsImported] = useState('')
    const theme = useTheme()
    const handleSubmit = useHandleSubmit(thoughtsImported)

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Pensamentos</Label>
                <Input
                    multiline
                    value={thoughtsImported}
                    cursorColor={theme.primary}
                    placeholder="Pensamentos..."
                    selectionColor={theme.primary}
                    onSubmitEditing={handleSubmit}
                    onChangeText={setThoughtsImported}
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