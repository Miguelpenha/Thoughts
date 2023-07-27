import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAnimation from './useAnimation'
import { Container, ContainerIcon, Icon, Title, ContainerIconRight, Line } from './style'
import { FadeInUp } from 'react-native-reanimated'
import limitText from '../../utils/limitText'

interface Iprops {
    back?: boolean
    right?: boolean
    children?: string
    onPress?: () => void
    onPressRight?: () => void
    icon?: keyof typeof MaterialIcons.glyphMap
    iconRight?: keyof typeof MaterialIcons.glyphMap
}

const HeaderBack: FC<Iprops> = ({ back=true, onPress, icon='arrow-back-ios', children, right=false, iconRight='settings', onPressRight }) => {
    const navigation = useNavigation()
    const animation = useAnimation()

    return (
        <Container entering={FadeInUp}>
            <ContainerIcon onPress={onPress || navigation.goBack}>
                {back && (
                    <Icon name={icon} size={25}/>
                )}
            </ContainerIcon>
            <Title>{limitText(children, 25)}</Title>
            {right && (
                <ContainerIconRight onPress={() => onPressRight || navigation.navigate('Settings')}>
                    <Icon name={iconRight} size={28}/>
                </ContainerIconRight>
            )}
            <Line style={animation}/>
        </Container>
    )
}

export default HeaderBack