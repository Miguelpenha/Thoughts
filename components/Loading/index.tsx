import { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { Container } from './style'

interface Iprops {
    size?: number
    borderSize?: number
    style?: CSSProperties
}

const Loading: FC<Iprops> = (props) => {
    return (
        <Container {...props}/>
    )
}

export default Loading