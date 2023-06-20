import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderBack from '../../../components/HeaderBack'
import ButtonIcon from '../../../components/buttons/ButtonIcon'
import { IconAdd } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IProps {
    onPress: () => void
}

const Header: FC<IProps> = ({ onPress }) => {
    const navigation = useNavigation()

    return <>
        <HeaderBack icon="logout" onPress={onPress}>
            Pensamentos
        </HeaderBack>
        <ButtonIcon onPress={() => navigation.navigate('CreateThought')}>
            <IconAdd name="add" size={RFPercentage(6)}/>
        </ButtonIcon>
    </>
}

export default Header