import styled from 'styled-components/native'
import Button from './Button'

const ButtonIconCancel = styled(Button)`
    width: 15%;
    padding: 2%;
    border-radius: 40px;
    background-color: ${props => props.theme.error};
`

export default ButtonIconCancel