import { INavigation } from '../../types'
import { useRoute } from '@react-navigation/native'
import getThought from '../../services/getThought'
import useSettings from '../../contexts/settingsContext'
import { useState } from 'react'
import useHandlePress from './useHandlePress'
import useHandleLongPress from './useHandleLongPress'
import useAnimation from './useAnimation'
import useNavigateVerified from '../../components/hooks/useNavigateVerified'
import useModalize from '../../components/hooks/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { ContainerText, Text, Options, IconCancel, Icon } from './style'
import { FadeInDown, CurvedTransition } from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import ButtonIconCancel from '../../components/buttons/ButtonIconCancel'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { Modalize } from 'react-native-modalize'
import ModalizeAboutThought from '../../components/modalizes/ModalizeAboutThought'
import ModalizeDeleteThought from '../../components/modalizes/ModalizeDeleteThought'
import ModalizeGroupOptionsThought from '../../components/modalizes/ModalizeGroupOptionsThought'

interface IParams {
    thoughtID: string
    next: keyof INavigation
}

function Thought() {
    const { thoughtID, next } = useRoute().params as IParams
    const thought = getThought(thoughtID)
    const { showFirstHidden } = useSettings().settings
    const [hidden, setHidden] = useState(showFirstHidden)
    const handlePress = useHandlePress(thought, hidden, setHidden)
    const handleLongPress = useHandleLongPress(hidden, thought)
    const animation = useAnimation(handleLongPress, handlePress)
    const navigateVerified = useNavigateVerified()
    const { modalize: modalizeAboutThought, props: propsAboutThought } = useModalize(70, 0, true)
    const { props: propsDeleteThought, modalize: modalizeDeleteThought } = useModalize(60, 60)
    const { modalize: modalizeOptions, props: propsOptions } = useModalize(90, 70, true)

    if (thought) {
        return (
            <ContainerDefault scroll>
                <HeaderBack type="touchable" onPressContainer={modalizeAboutThought.open}>{thought.name}</HeaderBack>
                <ContainerText layout={CurvedTransition} entering={FadeInDown.delay(600).duration(400)} activeOpacity={0.5} {...animation}>
                    <Text multiline={!hidden} value={thought.text} editable={false} secureTextEntry={hidden}/>
                </ContainerText>
                <Options>
                    <ButtonIconCancel index={1} onPress={() => modalizeDeleteThought.open()}>
                        <IconCancel name="delete" size={RFPercentage(5)}/>
                    </ButtonIconCancel>
                    <ButtonIcon index={2} onPress={async () => {
                        await navigateVerified('EditThought', { thoughtID: thought.id }, thought.secure)
                    }}>
                        <Icon name="edit" size={RFPercentage(5)}/>
                    </ButtonIcon>
                    <ButtonIcon index={3} onPress={modalizeOptions.open}>
                        <Icon name="more-vert" size={RFPercentage(5)}/>
                    </ButtonIcon>
                </Options>
                <Modalize {...propsAboutThought}>
                    <ModalizeAboutThought thought={thought}/>
                </Modalize>
                <Modalize {...propsDeleteThought}>
                    <ModalizeDeleteThought next={next} thought={thought} modalize={modalizeDeleteThought.ref}/>
                </Modalize>
                <ModalizeGroupOptionsThought next={next} propsOptions={propsOptions} thoughtSelected={thought}/>
            </ContainerDefault>
        )
    } else {
        return null
    }
}

export default Thought