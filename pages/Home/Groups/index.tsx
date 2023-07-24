import { IThought } from '../../../types'
import { FC } from 'react'
import useGroups from '../../../services/useGroups'
import useModalize from '../../../components/hooks/useModalize'
import { FlashList } from '@shopify/flash-list'
import Group from '../../../components/Group'
import Header from './Header'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../../components/modalizes/ModalizeLogout'

interface IProps {
    thoughts: IThought[]
}

const Groups: FC<IProps> = ({ thoughts }) => {
    const groups = useGroups()
    const { modalize: modalizeLogout, props: propsLogout } = useModalize(60)

    return (
        <>
            <FlashList
                data={groups}
                estimatedItemSize={70}
                ListHeaderComponentStyle={{ paddingBottom: '10%' }}
                renderItem={({ index, item }) => <Group index={index} group={item}/>}
                ListHeaderComponent={<Header thoughts={thoughts} groups={groups} modalize={modalizeLogout.ref}/>}
            />
            <Modalize FloatingComponent {...propsLogout}>
                <ModalizeLogout modalize={modalizeLogout.ref}/>
            </Modalize>
        </>
    )
}

export default Groups