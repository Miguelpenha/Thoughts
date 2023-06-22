import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import InputRaw from '../../Input'

export const Icon = styled(MaterialIcons)`
    position: absolute;
    color: ${props => props.theme.primary};
`

export const Input = styled(InputRaw)`
    width: 70%;
    margin-top: 5%;
    align-self: center;
    background-color: ${props => props.theme.backgroundColorSecondary};
`