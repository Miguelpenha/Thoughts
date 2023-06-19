import { IThought } from '../../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useHandleDelete from './useHandleDelete'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import ButtonCancel from '../../buttons/ButtonCancel'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../../buttons/Button'

interface IProps {
    thought: IThought
    modalize: RefObject<IHandles>
}

const ModalizeDeleteThought: FC<IProps> = ({ thought, modalize }) => {
    const handleDelete = useHandleDelete(thought)

    return <>
        <Title entering={FadeInUp.duration(700)}>Deletar pensamento?</Title>
        <ButtonCancel title="Deletar" index={1} onPress={handleDelete}>
            <MaterialIcons icon="logout" size={30}/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <MaterialIcons icon="close" size={30}/>
        </Button>
    </>
}

export default ModalizeDeleteThought