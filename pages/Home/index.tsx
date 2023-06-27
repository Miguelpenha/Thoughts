import useThoughts from '../../services/useThoughts'
import useModalize from '../../components/hooks/useModalize'
import { useState } from 'react'
import { IThought } from '../../types'
import ContainerDefault from '../../components/ContainerDefault'
import { FlashList } from '@shopify/flash-list'
import Header from './Header'
import Thought from '../../components/Thought'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'
import ModalizeOptionsThought from '../../components/modalizes/ModalizeOptionsThought'
import ModalizeDeleteThought from '../../components/modalizes/ModalizeDeleteThought'

function Home() {
    const thoughts = useThoughts()
    const { modalize: modalizeLogout, props: propsLogout } = useModalize(60)
    const { modalize: modalizeOptions, props: propsOptions } = useModalize(90, 70)
    const { modalize: modalizeDelete, props: propsDelete } = useModalize(60)
    const [thoughtSelected, setThoughtSelected] = useState<IThought>()

    return (
        <ContainerDefault>
            <FlashList
                data={thoughts}
                estimatedItemSize={70}
                ListHeaderComponent={<Header onPress={modalizeLogout.open}/>}
                renderItem={({ index, item }) => <Thought index={index} thought={item} onLongPress={() => {
                    setThoughtSelected(item)
                    
                    modalizeOptions.open()
                }}/>}
            />
            <Modalize FloatingComponent {...propsLogout}>
                <ModalizeLogout modalize={modalizeLogout.ref}/>
            </Modalize>
            <Modalize {...propsOptions}>
                <ModalizeOptionsThought
                    thought={thoughtSelected}
                    modalize={modalizeOptions.ref}
                    modalizeDelete={modalizeDelete.ref}
                />
            </Modalize>
            <Modalize {...propsDelete}>
                <ModalizeDeleteThought thought={thoughtSelected} modalize={modalizeDelete.ref}/>
            </Modalize>
        </ContainerDefault>
    )
}

export default Home