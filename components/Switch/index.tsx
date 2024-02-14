import { AnimatedProps, FadeInDown } from 'react-native-reanimated'
import { ViewProps } from 'react-native'
import { Dispatch, SetStateAction, FC  } from 'react'
import { useTheme } from 'styled-components'
import { Container, Label, SwitchRaw } from './style'

interface IProps extends AnimatedProps<ViewProps> {
    label: string
    value: boolean
    index?: number
    onChange?: () => void
    setValue: Dispatch<SetStateAction<boolean>>
}

const Switch: FC<IProps> = ({ index=1, value, setValue, onChange, label, ...props }) => {
    const theme = useTheme()

    return (
        <Container entering={FadeInDown.delay((index*100)+200).duration(400)} {...props}>
            <Label>{label}</Label>
            <SwitchRaw
                value={value}
                thumbColor={value ? theme.primary : theme.secondaryColor}
                trackColor={{ true: theme.primary, false: theme.backgroundColor }}
                onChange={() => {
                    setValue(!value)

                    onChange && onChange()
                }}
            />
        </Container>
    )
}

export default Switch