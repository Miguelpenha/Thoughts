import styled from 'styled-components/native'
import Button from './Button'

const ButtonIcon = styled(Button)`
    width: 15%;
    padding: 2%;
    border-radius: 40px;
    background-color: ${props => props.theme.secondary};
`

export default ButtonIcon