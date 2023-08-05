import { useRoute } from '@react-navigation/native'
import useGroup from '../../services/useGroup'
import useThoughts from '../../services/useThoughts'
import useModalize from '../../components/hooks/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import ListThoughts from '../../components/ListThoughts'
import { Modalize } from 'react-native-modalize'
import ModalizeAboutGroup from '../../components/modalizes/ModalizeAboutGroup'

interface IParams {
    groupName: string
}

function Group() {
    const { groupName } = useRoute().params as IParams
    const group = useGroup(groupName)
    const thoughts = useThoughts()
    const { modalize: modalizeAboutGroup, props: propsAboutGroup } = useModalize(70)

    if (group && thoughts) {
        return (
            <ContainerDefault>
                <HeaderBack type="touchable" onPressContainer={modalizeAboutGroup.open}>{`Grupo ${group}`}</HeaderBack>
                <ListThoughts group={group} thoughts={thoughts} next="Group"/>
                <Modalize {...propsAboutGroup}>
                    <ModalizeAboutGroup group={group}/>
                </Modalize>
            </ContainerDefault>
        )
    } else {
        return null
    }
}

export default Group