import { RefObject, Dispatch, SetStateAction, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useNavigation } from '@react-navigation/native'
import useGroups from '../../../services/useGroups'
import ButtonIcon from '../../buttons/ButtonIcon'
import { IconAdd, Message } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '../../buttons/Button'
import { FadeInUp } from 'react-native-reanimated'

interface IProps {
    modalize: RefObject<IHandles>
    setGroup: Dispatch<SetStateAction<string>>
}

const ModalizeSelectedGroup: FC<IProps> = ({ modalize, setGroup }) => {
    const navigation = useNavigation()
    const groups = useGroups()

    function handlePress(group: string) {
        modalize.current.close()

        setGroup(group)
    }
    
    return (
        <>
            <ButtonIcon onPress={() => navigation.navigate('CreateGroup')}>
                <IconAdd name="add" size={RFPercentage(5)}/>
            </ButtonIcon>
            <Button
                title="Nenhum grupo"
                key={groups.length+1}
                index={groups.length+1}
                onPress={() => handlePress('')}
            />
            {groups.length ? groups.map((group, index) => 
                <Button title={group} key={index} index={index} onPress={() => handlePress(group)}/>
            ) : (
                <Message entering={FadeInUp.duration(500).delay(300)}>Ainda não há grupos criados</Message>
            )}
        </>
    )
}

export default ModalizeSelectedGroup