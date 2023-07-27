import { RefObject, FC, useState } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Button from '../../buttons/Button'
import Icon from '../../Icon'
import Options from './Options'

interface IProps {
    modalize: RefObject<IHandles>
}

const ModalizeExportThoughts: FC<IProps> = ({ modalize }) => {
    const [showOptions, setShowOptions] = useState(false)

    return <>
        {!showOptions && <>
            <Title entering={FadeInUp.duration(700)}>Exportar pensamentos?</Title>
            <Button title="Exportar" index={1} onPress={() => setShowOptions(true)}>
                <Icon name="file-upload" size={30}/>
            </Button>
            <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
                <Icon name="close" size={30}/>
            </Button>
        </>}
        <Options modalize={modalize} showOptions={showOptions}/>
    </>
}

export default ModalizeExportThoughts