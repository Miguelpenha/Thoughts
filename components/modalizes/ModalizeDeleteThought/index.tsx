import { IThought, INavigation } from '../../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useDeleteThought from '../../hooks/useDeleteThought'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import ButtonCancel from '../../buttons/ButtonCancel'
import Icon from '../../Icon'
import Button from '../../buttons/Button'

interface IProps {
    thought: IThought
    next?: keyof INavigation
    modalize: RefObject<IHandles>
}

const ModalizeDeleteThought: FC<IProps> = ({ thought, modalize, next }) => {
    const deleteThought = useDeleteThought(thought, modalize, next)

    return <>
        <Title entering={FadeInUp.duration(700)}>Deletar pensamento?</Title>
        <ButtonCancel title="Deletar" index={1} onPress={deleteThought}>
            <Icon color="color" name="delete" size={30}/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <Icon name="close" size={30}/>
        </Button>
    </>
}

export default ModalizeDeleteThought