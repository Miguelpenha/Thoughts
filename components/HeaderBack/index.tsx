import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAnimation from './useAnimation'
import Container from './Container'
import { Content, ContainerIcon, Icon, Title, ContainerIconRight, Line } from './style'
import limitText from '../../utils/limitText'

interface Iprops {
    back?: boolean
    right?: boolean
    children?: string
    onPress?: () => void
    onPressRight?: () => void
    type?: 'view' | 'touchable'
    onPressContainer?: () => void
    icon?: keyof typeof MaterialIcons.glyphMap
    iconRight?: keyof typeof MaterialIcons.glyphMap
}

const HeaderBack: FC<Iprops> = ({ type='view', back=true, onPress, onPressContainer, icon='arrow-back-ios', children, right=false, iconRight='settings', onPressRight }) => {
    const navigation = useNavigation()
    const animation = useAnimation()
    const navigateSettings = () => navigation.navigate('Settings')

    return (
        <Container type={type} onPress={onPressContainer}>
            <Content>
                <ContainerIcon onPress={onPress || navigation.goBack}>
                    {back && (
                        <Icon name={icon} size={25}/>
                    )}
                </ContainerIcon>
                <Title>{limitText(children, 25)}</Title>
                {right && (
                    <ContainerIconRight onPress={onPressRight || navigateSettings}>
                        <Icon name={iconRight} size={28}/>
                    </ContainerIconRight>
                )}
            </Content>
            <Line style={animation}/>
        </Container>
    )
}

export default HeaderBack