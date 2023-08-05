import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

const IconMenu = styled(MaterialIcons)`
    position: absolute;
    color: ${props => props.theme.primary};
`

export default IconMenu