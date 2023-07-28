import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useHandleDeleteGroup from '../../hooks/useHandleDeleteGroup'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import ButtonCancel from '../../buttons/ButtonCancel'
import Icon from '../../Icon'
import Button from '../../buttons/Button'

interface IProps {
    group: string
    modalize: RefObject<IHandles>
}

const ModalizeDeleteGroup: FC<IProps> = ({ group, modalize }) => {
    const handleDeleteGroup = useHandleDeleteGroup(group)

    return <>
        <Title entering={FadeInUp.duration(700)}>Deletar grupo?</Title>
        <ButtonCancel title="Deletar" index={1} onPress={async () => {
            const groupDeleted = await handleDeleteGroup()

            groupDeleted && modalize.current.close()
        }}>
            <Icon color="color" name="delete" size={30}/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <Icon name="close" size={30}/>
        </Button>
    </>
}

export default ModalizeDeleteGroup