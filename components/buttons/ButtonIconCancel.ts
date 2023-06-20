import styled from 'styled-components/native'
import ButtonIcon from './ButtonIcon'

const ButtonIconCancel = styled(ButtonIcon)`
    background-color: ${props => props.theme.error};
`

export default ButtonIconCancel