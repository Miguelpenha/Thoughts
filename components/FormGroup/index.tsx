import { FC, useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../Input'
import ButtonSubmit from '../buttons/ButtonSubmit'
import Icon from '../Icon'

interface IProps {
    QRCode?: string
    nameDefault?: string
    titleConfirm: string
    handleSubmit: (name: string) => Promise<void>
}

const FormGroup: FC<IProps> = ({ nameDefault, QRCode, titleConfirm, handleSubmit }) => {
    const [name, setName] = useState(nameDefault || '')
    const theme = useTheme()

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
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                    onSubmitEditing={() => handleSubmit(name)}
                />
            </Field>
            <ButtonSubmit directionIcon="right" loading title={titleConfirm} onPress={() => handleSubmit(name)}>
                <Icon name="arrow-forward-ios" size={25} directionIcon="right"/>
            </ButtonSubmit>
        </Container>
    )
}

export default FormGroup