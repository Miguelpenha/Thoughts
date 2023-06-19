import useThoughts from '../../services/useThoughts'
import ContainerDefault from '../../components/ContainerDefault'
import { FlashList } from '@shopify/flash-list'
import Thought from '../../components/Thought'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'
import useModalize from '../../components/modalizes/useModalize'
import Header from './Header'

function Home() {
    const thoughts = useThoughts()
    const { modalize: modalizeLogout, props } = useModalize()

    return (
        <ContainerDefault>
            <FlashList
                data={thoughts}
                estimatedItemSize={70}
                renderItem={({ item }) => <Thought thought={item}/>}
                ListHeaderComponent={<Header onPress={modalizeLogout.open}/>}
            />
            <Modalize {...props}>
                <ModalizeLogout modalize={modalizeLogout.ref}/>
            </Modalize>
        </ContainerDefault>
    )
}

export default Home