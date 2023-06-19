import { RefreshControlProps } from 'react-native'
import { useState } from 'react'
import { useTheme } from 'styled-components'

function useRefreshProps(onRefresh: () => Promise<any | void>): RefreshControlProps {
    const [refreshing, setRefreshing] = useState(false)
    const theme = useTheme()

    async function handleRefresh() {
        setRefreshing(true)

        await onRefresh()

        setRefreshing(false)
    }

    return {
        refreshing,
        colors: [theme.primary],
        onRefresh: handleRefresh,
        progressBackgroundColor: theme.secondary
    }
}

export default useRefreshProps