import styled from 'styled-components/native'
import Button from './Button'
import { RFPercentage } from 'react-native-responsive-fontsize'

const ButtonIcon = styled(Button)`
    padding: 2%;
    border-radius: 40px;
    flex-direction: column;
    width: ${RFPercentage(9)}px;
    height: ${RFPercentage(9)}px;
    background-color: ${props => props.theme.secondary};
`

export default ButtonIcon