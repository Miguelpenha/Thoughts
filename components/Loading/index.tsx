import { ActivityIndicatorProps, Platform } from 'react-native'
import { FC, memo } from 'react'
import { useTheme } from 'styled-components'
import { LoadingRaw } from './style'
import { FadingTransition } from 'react-native-reanimated'

interface IProps extends ActivityIndicatorProps {
    size?: number
}

const Loading: FC<IProps> = ({ size=50, ...props }) => {
    const theme = useTheme()

    return (
        <LoadingRaw
            {...props}
            color={theme.primary}
            layout={FadingTransition}
            size={Platform.OS === 'android' ? size : 'large'}
        />
    )
}

export default memo(Loading)