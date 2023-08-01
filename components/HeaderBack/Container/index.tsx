import { FC } from 'react'
import { ContainerView, ContainerTouchable } from './style'
import { FadeInUp } from 'react-native-reanimated'

interface IProps {
    children: any
    onPress: () => void
    type: 'view' | 'touchable'
}

const Container: FC<IProps> = ({ type, children, onPress }) => {
    if (type === 'view') {
        return (
            <ContainerView entering={FadeInUp}>
                {children}
            </ContainerView>
        )
    } else if (type === 'touchable') {
        return (
            <ContainerTouchable onPress={onPress} entering={FadeInUp} activeOpacity={0.5}>
                {children}
            </ContainerTouchable>
        )
    }
}

export default Container