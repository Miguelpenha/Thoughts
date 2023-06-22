import { useModalize as useModalizeRaw } from 'react-native-modalize'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'

function useModalize(height: number=60, snapPoint: number=0) {
    const modalize = useModalizeRaw()
    const theme = useTheme()

    const props = {
        ref: modalize.ref,
        height: RFPercentage(height),
        snapPoint: RFPercentage(snapPoint),
        modalStyle: { backgroundColor: theme.backgroundColor },
        handleStyle: { width: RFPercentage(10), backgroundColor: theme.primary }
    }

    return {
        props,
        modalize
    }
}

export default useModalize