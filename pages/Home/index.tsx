import useThoughts from '../../services/useThoughts'
import useModalize from '../../components/modalizes/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import { FlashList } from '@shopify/flash-list'
import Header from './Header'
import Thought from '../../components/Thought'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'

function Home() {
    const thoughts = useThoughts()
    const { modalize: modalizeLogout, props: propsLogout } = useModalize(60, 60)

    return (
        <ContainerDefault>
            <FlashList
                data={thoughts}
                estimatedItemSize={70}
                ListHeaderComponent={<Header onPress={modalizeLogout.open}/>}
                renderItem={({ index, item }) => <Thought index={index} thought={item}/>}
            />
            <Modalize {...propsLogout}>
                <ModalizeLogout modalize={modalizeLogout.ref}/>
            </Modalize>
        </ContainerDefault>
    )
}

export default Home