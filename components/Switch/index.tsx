import { Dispatch, SetStateAction, FC  } from 'react'
import { useTheme } from 'styled-components'
import { Container, SwitchRaw, Label } from './style'

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
            <SwitchRaw
                value={value}
                thumbColor={value ? theme.primary : theme.secondaryColor}
                trackColor={{ true: theme.primary, false: theme.backgroundColor }}
                onChange={() => {
                    setValue(!value)

                    onChange && onChange()
                }}
            />
            <Label>{label}</Label>
        </Container>
    )
}

export default Switch