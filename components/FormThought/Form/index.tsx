import { IThought } from '../../../types'
import { FC, useState } from 'react'
import useHandleSubmit from './useHandleSubmit'
import { useTheme } from 'styled-components'
import useQRCode from './useQRCode'
import { Container, Field, Label } from './style'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Input from '../../Input'
import Switch from '../../Switch'
import ButtonSubmit from '../../buttons/ButtonSubmit'
import Icon from '../../Icon'

interface IProps {
    QRCode?: string
    thought?: IThought
    titleSubmit: string
    initialData: boolean
    onSubmit: (name: string, text: string, secure: boolean) => Promise<void>
}

const Form: FC<IProps> = ({ thought, onSubmit, QRCode, initialData, titleSubmit }) => {
    const [name, setName] = useState(thought ? thought.name || '' : '')
    const [text, setText] = useState(thought ? thought.text || '' : '')
    const [secure, setSecure] = useState(Boolean(thought ? Boolean(thought.secure) : true))
    const theme = useTheme()
    const handleSubmit = useHandleSubmit(name, text, secure, onSubmit)

    useQRCode(QRCode, setText)

    if (!initialData) {
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
                <ButtonSubmit directionIcon="right" loading title={titleSubmit} onPress={handleSubmit}>
                    <Icon name="arrow-forward-ios" size={25} directionIcon="right"/>
                </ButtonSubmit>
            </Container>
        )
    } else {
        return null
    }
}

export default Form