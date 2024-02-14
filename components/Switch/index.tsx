import { Dispatch, SetStateAction, FC  } from 'react'
import { useTheme } from 'styled-components'
import { Container, Label, SwitchRaw } from './style'

interface IProps {
    label: string
    value: boolean
    onChange?: () => void
    setValue: Dispatch<SetStateAction<boolean>>
}

const Switch: FC<IProps> = ({ value, setValue, onChange, label }) => {
    const theme = useTheme()

    return (
        <Container>
            <Label>{label}</Label>
            <SwitchRaw
                value={value}
                thumbColor={value ? theme.primary : theme.secondaryColor}
                trackColor={{ true: theme.primary, false: theme.backgroundColorSecondary }}
                onChange={() => {
                    setValue(!value)

                    onChange && onChange()
                }}
            />
        </Container>
    )
}

export default Switch