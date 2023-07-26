import { IThought } from '../../../types'
import { FC, useState } from 'react'
import useModalize from '../../../components/hooks/useModalize'
import { FlashList } from '@shopify/flash-list'
import Header from './Header'
import Thought from '../../../components/Thought'
import { Modalize } from 'react-native-modalize'
import ModalizeOptionsThought from '../../../components/modalizes/ModalizeOptionsThought'
import ModalizeQRCode from '../../../components/modalizes/ModalizeQRCode'
import ModalizeDeleteThought from '../../../components/modalizes/ModalizeDeleteThought'

interface IProps {
    thoughts: IThought[]
}

const Thoughts: FC<IProps> = ({ thoughts }) => {
    const { modalize: modalizeOptions, props: propsOptions } = useModalize(90, 70, true)
    const { modalize: modalizeQRCode, props: propsQRCode } = useModalize(90, 75, true)
    const { modalize: modalizeDelete, props: propsDelete } = useModalize(60, 0, true)
    const [thoughtSelected, setThoughtSelected] = useState<IThought>()
    const [positionModalizeQRCode, setPositionModalizeQRCode] = useState<'initial' | 'top'>('initial')

    function handleLongPress(item: IThought) {
        setThoughtSelected(item)
                
        modalizeOptions.open()
    }

    return (
        <>
            <FlashList
                data={thoughts}
                estimatedItemSize={70}
                ListHeaderComponent={<Header/>}
                renderItem={({ index, item }) => <Thought index={index} thought={item} onLongPress={() => handleLongPress(item)}/>}
            />
            <Modalize {...propsOptions}>
                <ModalizeOptionsThought
                    thought={thoughtSelected}
                    modalize={modalizeOptions.ref}
                    modalizeDelete={modalizeDelete.ref}
                    modalizeQRCode={modalizeQRCode.ref}
                />
            </Modalize>
            <Modalize onClosed={() => setPositionModalizeQRCode('initial')} onPositionChange={setPositionModalizeQRCode} {...propsQRCode}>
                <ModalizeQRCode position={positionModalizeQRCode} thought={thoughtSelected} modalize={modalizeQRCode.ref}/>
            </Modalize>
            <Modalize {...propsDelete}>
                <ModalizeDeleteThought thought={thoughtSelected} modalize={modalizeDelete.ref}/>
            </Modalize>
        </>
    )
}

export default Thoughts