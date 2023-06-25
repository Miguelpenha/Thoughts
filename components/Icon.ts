import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { ITheme } from '../types'

interface IIcon {
    color?: keyof ITheme
    directionIcon?: 'left' | 'right'
}

const Icon = styled(MaterialIcons)<IIcon>`
    color: ${props => props.theme[props.color || 'primary']};

    ${props => {
        if (!props.directionIcon || props.directionIcon === 'left') {
            return css`
                margin-right: 8%;
            `
        } else if (props.directionIcon === 'right') {
            return css`
                margin-left: 8%;
            `
        }
    }}
`

export default Icon