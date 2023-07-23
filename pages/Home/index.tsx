import useGroups from '../../services/useGroups'
import useThoughts from '../../services/useThoughts'
import useModalize from '../../components/hooks/useModalize'
import { useState } from 'react'
import { IThought } from '../../types'
import ContainerDefault from '../../components/ContainerDefault'
import { FlashList } from '@shopify/flash-list'
import HeaderBack from '../../components/HeaderBack'
import Group from '../../components/Group'
import { Message } from './style'
import HeaderThoughts from './HeaderThoughts'
import Thought from '../../components/Thought'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'
import ModalizeOptionsThought from '../../components/modalizes/ModalizeOptionsThought'
import ModalizeDeleteThought from '../../components/modalizes/ModalizeDeleteThought'

function Home() {
    const groups = useGroups()
    const thoughts = useThoughts()
    const { modalize: modalizeLogout, props: propsLogout } = useModalize(60)
    const { modalize: modalizeOptions, props: propsOptions } = useModalize(90, 70)
    const { modalize: modalizeDelete, props: propsDelete } = useModalize(60)
    const [thoughtSelected, setThoughtSelected] = useState<IThought>()

    return (
        <ContainerDefault scroll>
            <FlashList
                data={groups}
                estimatedItemSize={70}
                ListHeaderComponentStyle={{ paddingBottom: '10%' }}
                renderItem={({ index, item }) => <Group index={index} group={item}/>}
                ListHeaderComponent={<>
                    <HeaderBack settings icon="logout" onPress={modalizeLogout.open}>Pensamentos</HeaderBack>
                    {(!groups.length || !thoughts.length) && (
                        <Message>Ainda não há {`${(!groups.length && !thoughts.length) ? 'grupos e pensamentos' : (groups.length && !thoughts.length) ? 'pensamentos' : 'grupos'}`} cadastrados</Message>
                    )}
                </>}
            />
            <FlashList
                data={thoughts}
                estimatedItemSize={70}
                ListHeaderComponent={<HeaderThoughts/>}
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