import { FC } from 'react'
import useHandlePress from './useHandlePress'
import ButtonIcon from '../../../components/buttons/ButtonIcon'
import { IconAdd } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IProps {
    group?: string
}

const Header: FC<IProps> = ({ group }) => {
    const handlePress = useHandlePress(group)

    return (
        <ButtonIcon onPress={handlePress}>
            <IconAdd name="add" size={RFPercentage(6)}/>
        </ButtonIcon>
    )
}

export default Header