import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useExportThoughts from '../../hooks/useExportThoughts'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Icon from '../../Icon'
import Button from '../../buttons/Button'

interface IProps {
    modalize: RefObject<IHandles>
}

const ModalizeExportThoughts: FC<IProps> = ({ modalize }) => {
    const exportThoughts = useExportThoughts(modalize)

    return <>
        <Title entering={FadeInUp.duration(700)}>Exportar pensamentos?</Title>
        <Button title="Exportar" index={1} onPress={exportThoughts}>
            <Icon name="file-upload" size={30}/>
        </Button>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <Icon name="close" size={30}/>
        </Button>
    </>
}

export default ModalizeExportThoughts