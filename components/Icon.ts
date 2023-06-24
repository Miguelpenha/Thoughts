import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { ITheme } from '../types'

interface IIcon {
    color?: keyof ITheme
}

const Icon = styled(MaterialIcons)<IIcon>`
    margin-right: 8%;
    color: ${props => props.theme[props.color || 'primary']};
`

export default Icon