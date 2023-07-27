import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useHandleExport from './useOptions'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Button from '../../../buttons/Button'
import Icon from '../../../Icon'

interface IProps {
    showOptions: boolean
    modalize: RefObject<IHandles>
}

const Options: FC<IProps> = ({ modalize, showOptions }) => {
    const { copy, share } = useHandleExport(modalize)

    if (showOptions) {
        return <>
            <Title entering={FadeInUp.duration(700)}>Escolha uma opção</Title>
            <Button title="Copiar" index={1} onPress={copy}>
                <Icon name="content-copy" size={30}/>
            </Button>
            <Button title="Compartilhar" index={2} onPress={share}>
                <Icon name="share" size={30}/>
            </Button>
        </>
    } else {
        return null
    }
}

export default Options