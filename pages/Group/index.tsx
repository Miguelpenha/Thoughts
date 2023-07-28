import { useRoute } from '@react-navigation/native'
import useGroup from '../../services/useGroup'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import ListThoughts from '../../components/ListThoughts'
import useThoughts from '../../services/useThoughts'

interface IParams {
    groupName: string
}

function Group() {
    const { groupName } = useRoute().params as IParams
    const group = useGroup(groupName)
    const thoughts = useThoughts()

    if (group && thoughts) {
        return (
            <ContainerDefault>
                <HeaderBack>{`Grupo ${group}`}</HeaderBack>
                <ListThoughts group={group} thoughts={thoughts}/>
            </ContainerDefault>
        )
    } else {
        return null
    }
}

export default Group