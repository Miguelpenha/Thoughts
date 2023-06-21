import styled from 'styled-components/native'
import Button from './Button'

const ButtonSubmit = styled(Button)`
    width: 75%;
    padding: 5.5%;
    background-color: ${props => props.theme.backgroundColor};
`

export default ButtonSubmit