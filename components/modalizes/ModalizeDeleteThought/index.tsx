import { IThought } from '../../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useHandleDeleteThought from '../../useHandleDeleteThought'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import ButtonCancel from '../../buttons/ButtonCancel'
import Icon from '../../Icon'
import Button from '../../buttons/Button'

interface IProps {
    thought: IThought
    modalize: RefObject<IHandles>
}

const ModalizeDeleteThought: FC<IProps> = ({ thought, modalize }) => {
    const handleDeleteThought = useHandleDeleteThought(thought, modalize, false)

    return <>
        <Title entering={FadeInUp.duration(700)}>Deletar pensamento?</Title>
        <ButtonCancel title="Deletar" index={1} onPress={handleDeleteThought}>
            <Icon color="color" name="delete" size={30}/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <Icon name="close" size={30}/>
        </Button>
    </>
}

export default ModalizeDeleteThought