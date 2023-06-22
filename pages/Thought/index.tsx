import { useRoute } from '@react-navigation/native'
import getThought from '../../services/getThought'
import useHandlePress from './useHandlePress'
import useAnimation from './useAnimation'
import useHandleShare from './handleShare'
import useModalize from '../../components/modalizes/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { ContainerText, Text, Options, IconCancel, Icon } from './style'
import { FadeInDown } from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import ButtonIconCancel from '../../components/buttons/ButtonIconCancel'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { Modalize } from 'react-native-modalize'
import ModalizeDeleteThought from '../../components/modalizes/ModalizeDeleteThought'

interface IParams {
    thoughtID: string
}

function Thought() {
    const { thoughtID } = useRoute().params as IParams
    const thought = getThought(thoughtID)
    const handlePress = useHandlePress(thought)
    const animation = useAnimation(handlePress)
    const handleShare = useHandleShare(thought)
    const { props, modalize: modalizeDeleteThought } = useModalize(60, 60)

    if (thought) {
        return (
            <ContainerDefault>
                <HeaderBack>{thought.name}</HeaderBack>
                <ContainerText entering={FadeInDown.delay(100).duration(400)} activeOpacity={0.5} {...animation}>
                    <Text>{thought.text}</Text>
                </ContainerText>
                <Options>
                    <ButtonIconCancel index={1} onPress={() => modalizeDeleteThought.open()}>
                        <IconCancel name="delete" size={RFPercentage(5)}/>
                    </ButtonIconCancel>
                    <ButtonIcon index={2} onPress={handleShare}>
                        <Icon name="share" size={RFPercentage(5)}/>
                    </ButtonIcon>
                </Options>
                <Modalize {...props}>
                    <ModalizeDeleteThought thought={thought} modalize={modalizeDeleteThought.ref}/>
                </Modalize>
            </ContainerDefault>
        )
    } else {
        return null
    }
}

export default Thought