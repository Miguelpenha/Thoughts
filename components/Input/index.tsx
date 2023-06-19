import { TextInputProps } from 'react-native'
import { FC } from 'react'
import useAnimation from './useAnimation'
import { InputRaw } from './style'

interface Iprops extends TextInputProps {
    secret?: boolean
}

const Input: FC<Iprops> = ({ style, secret, ...props }) => {
    const animation = useAnimation(style as object)

    return (
        <InputRaw secret={secret} {...animation} {...props}/>
    )
}

export default Input