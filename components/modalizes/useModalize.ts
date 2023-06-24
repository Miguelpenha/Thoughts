import { ModalizeProps, useModalize as useModalizeRaw } from 'react-native-modalize'
import { RefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IModalize extends ModalizeProps {
    ref: RefObject<IHandles>
}

function useModalize(height: number=60, snapPoint: number=0) {
    const modalize = useModalizeRaw()
    const theme = useTheme()

    const props: IModalize = {
        ref: modalize.ref,
        modalHeight: RFPercentage(height),
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