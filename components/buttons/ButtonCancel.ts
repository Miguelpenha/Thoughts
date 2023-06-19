import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Button from './Button'
import theme from '../../theme'

const { textStyle } = StyleSheet.create({
    textStyle: {
        color: theme.color
    }
})

const ButtonCancel = styled(Button).attrs({
    styleText: textStyle
})`
    background-color: ${props => props.theme.error};
`

export default ButtonCancel