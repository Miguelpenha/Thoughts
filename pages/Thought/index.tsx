import { useRoute } from '@react-navigation/native'
import getThought from '../../services/getThought'
import { useState } from 'react'
import useHandlePress from './useHandlePress'
import useHandleLongPress from './useHandleLongPress'
import useAnimation from './useAnimation'
import useNavigateVerified from '../../components/hooks/useNavigateVerified'
import useShareThought from '../../components/hooks/useShareThought'
import useChangeSecure from '../../components/hooks/useChangeSecure'
import useShowQRCode from '../../components/hooks/useShowQRCode'
import useModalize from '../../components/hooks/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { ContainerText, Text, Options, IconCancel, Icon } from './style'
import { FadeInDown } from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import ButtonIconCancel from '../../components/buttons/ButtonIconCancel'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { Modalize } from 'react-native-modalize'
import ModalizeDeleteThought from '../../components/modalizes/ModalizeDeleteThought'
import ModalizeQRCode from '../../components/modalizes/ModalizeQRCode'

interface IParams {
    thoughtID: string
}

function Thought() {
    const { thoughtID } = useRoute().params as IParams
    const thought = getThought(thoughtID)
    const [hidden, setHidden] = useState(false)
    const handlePress = useHandlePress(thought, hidden, setHidden)
    const handleLongPress = useHandleLongPress(thought)
    const animation = useAnimation(handleLongPress, handlePress)
    const navigateVerified = useNavigateVerified()
    const shareThought = useShareThought(thought)
    const changeSecure = useChangeSecure(thought)
    const showQRCode = useShowQRCode(thought)
    const { props: propsDeleteThought, modalize: modalizeDeleteThought } = useModalize(60, 60)
    const { props: propsQRCode, modalize: modalizeQRCode } = useModalize(90, 75, true)
    const [positionModalizeQRCode, setPositionModalizeQRCode] = useState<'initial' | 'top'>('initial')

    async function handleQRCode() {
        const isShow = await showQRCode()
                
        if (isShow) {
            modalizeQRCode.open()
        }
    }

    if (thought) {
        return (
            <ContainerDefault>
                <HeaderBack>{`${thought.name} ${thought.group ? `(${thought.group})` : ''}`}</HeaderBack>
                <ContainerText entering={FadeInDown.delay(100).duration(400)} activeOpacity={0.5} {...animation}>
                    <Text value={thought.text} editable={false} secureTextEntry={hidden}/>
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
                    <ButtonIcon index={3} onPress={shareThought}>
                        <Icon name="share" size={RFPercentage(5)}/>
                    </ButtonIcon>
                    <ButtonIcon index={4} onPress={changeSecure}>
                        <Icon name={thought.secure ? 'lock-open' : 'lock'} size={RFPercentage(5)}/>
                    </ButtonIcon>
                    <ButtonIcon index={5} onPress={handleQRCode}>
                        <Icon name="qr-code-2" size={RFPercentage(5)}/>
                    </ButtonIcon>
                </Options>
                <Modalize {...propsDeleteThought}>
                    <ModalizeDeleteThought thought={thought} modalize={modalizeDeleteThought.ref}/>
                </Modalize>
                <Modalize onClosed={() => setPositionModalizeQRCode('initial')} onPositionChange={setPositionModalizeQRCode} {...propsQRCode}>
                    <ModalizeQRCode position={positionModalizeQRCode} thought={thought} modalize={modalizeQRCode.ref}/>
                </Modalize>
            </ContainerDefault>
        )
    } else {
        return null
    }
}

export default Thought