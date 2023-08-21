import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useDeleteData from './useDeleteData'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Datas from './Datas'
import ButtonCancel from '../../buttons/ButtonCancel'
import Icon from '../../Icon'
import Button from '../../buttons/Button'

interface IProps {
    modalize: RefObject<IHandles>
}

const ModalizeDeleteData: FC<IProps> = ({ modalize }) => {
    const deleteData = useDeleteData()

    return <>
        <Title entering={FadeInUp.duration(700)}>Deletar dados?</Title>
        <Datas/>
        <ButtonCancel title="Deletar" index={1} onPress={deleteData}>
            <Icon color="color" name="delete" size={30}/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <Icon name="close" size={30}/>
        </Button>
    </>
}

export default ModalizeDeleteData