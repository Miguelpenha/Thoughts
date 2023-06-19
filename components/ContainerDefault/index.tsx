import { ViewStyle } from 'react-native'
import { FC } from 'react'
import { Container, ContainerScroll } from './style'

interface Iprops {
    children: any
    scroll?: boolean
    style?: ViewStyle
}

const ContainerDefault: FC<Iprops> = ({ scroll, children, ...props }) => {
    if (!scroll) {
        return (
            <Container {...props}>{children}</Container>
        )
    } else {
        return (
            <ContainerScroll {...props}>{children}</ContainerScroll>
        )
    }
}

export default ContainerDefault