import { IThought } from '../../../types'
import { FC, useState } from 'react'
import useGroups from '../../../services/useGroups'
import useModalize from '../../../components/hooks/useModalize'
import { FlashList } from '@shopify/flash-list'
import Group from '../../../components/Group'
import Header from './Header'
import { Modalize } from 'react-native-modalize'
import ModalizeOptionsGroup from '../../../components/modalizes/ModalizeOptionsGroup'
import ModalizeDeleteGroup from '../../../components/modalizes/ModalizeDeleteGroup'
import ModalizeQRCode from '../../../components/modalizes/ModalizeQRCode'
import ModalizeLogout from '../../../components/modalizes/ModalizeLogout'

interface IProps {
    thoughts: IThought[]
}

const Groups: FC<IProps> = ({ thoughts }) => {
    const groups = useGroups()
    const { modalize: modalizeOptionsGroup, props: propsOptionsGroup } = useModalize(60, 0, true)
    const [groupSelected, setGroupSelected] = useState<string>()
    const { modalize: modalizeDeleteGroup, props: propsDeleteGroup } = useModalize(60, 0, true)
    const { modalize: modalizeQRCode, props: propsQRCode } = useModalize(90, 75, true)
    const [positionModalizeQRCode, setPositionModalizeQRCode] = useState<'initial' | 'top'>('initial')
    const { modalize: modalizeLogout, props: propsLogout } = useModalize(60, 0, true)

    return (
        <>
            <FlashList
                data={groups}
                estimatedItemSize={70}
                ListHeaderComponentStyle={{ paddingBottom: '10%' }}
                renderItem={({ index, item }) => <Group index={index} group={item} onLongPress={() => {
                    setGroupSelected(item)

                    modalizeOptionsGroup.open()
                }}/>}
                ListHeaderComponent={<Header thoughts={thoughts} groups={groups} modalize={modalizeLogout.ref}/>}
            />
            <Modalize {...propsOptionsGroup}>
                <ModalizeOptionsGroup modalizeQRCode={modalizeQRCode.ref} modalize={modalizeOptionsGroup.ref} modalizeDelete={modalizeDeleteGroup.ref}/>
            </Modalize>
            <Modalize {...propsDeleteGroup}>
                <ModalizeDeleteGroup group={groupSelected} modalize={modalizeDeleteGroup.ref}/>
            </Modalize>
            <Modalize onClosed={() => setPositionModalizeQRCode('initial')} onPositionChange={setPositionModalizeQRCode} {...propsQRCode}>
                <ModalizeQRCode position={positionModalizeQRCode} text={groupSelected} modalize={modalizeQRCode.ref}/>
            </Modalize>
            <Modalize FloatingComponent {...propsLogout}>
                <ModalizeLogout modalize={modalizeLogout.ref}/>
            </Modalize>
        </>
    )
}

export default Groups