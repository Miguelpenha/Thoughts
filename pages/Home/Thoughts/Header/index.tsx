import { useNavigation } from '@react-navigation/native'
import ButtonIcon from '../../../../components/buttons/ButtonIcon'
import { IconAdd } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'

function Header() {
    const navigation = useNavigation()

    return (
        <ButtonIcon onPress={() => navigation.navigate('CreateThought')}>
            <IconAdd name="add" size={RFPercentage(6)}/>
        </ButtonIcon>
    )
}

export default Header