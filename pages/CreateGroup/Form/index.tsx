import { FC, useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import useHandleSubmit from './useHandleSubmit'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/buttons/ButtonSubmit'
import Icon from '../../../components/Icon'

interface IProps {
    QRCode?: string
}

const Form: FC<IProps> = ({ QRCode }) => {
    const [name, setName] = useState('')
    const theme = useTheme()
    const handleSubmit = useHandleSubmit(name)

    useEffect(() => {
        if (QRCode) {
            setName(QRCode)
        }
    }, [QRCode])

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Nome</Label>
                <Input
                    value={name}
                    onChangeText={setName}
                    cursorColor={theme.primary}
                    placeholder="Nome do grupo..."
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <ButtonSubmit directionIcon="right" loading title="Confirmar" onPress={handleSubmit}>
                <Icon name="arrow-forward-ios" size={25} directionIcon="right"/>
            </ButtonSubmit>
        </Container>
    )
}

export default Form