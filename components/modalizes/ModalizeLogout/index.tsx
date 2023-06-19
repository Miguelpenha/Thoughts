import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useLogout from './useLogout'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import ButtonCancel from '../../buttons/ButtonCancel'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../../buttons/Button'

interface IProps {
    modalize: RefObject<IHandles>
}

const ModalizeLogout: FC<IProps> = ({ modalize }) => {
    const logout = useLogout()

    async function handleLogout() {
        modalize.current.close()

        await logout()
    }

    return <>
        <Title entering={FadeInUp.duration(700)}>Fazer logout?</Title>
        <ButtonCancel title="Logout" index={1} onPress={handleLogout}>
            <MaterialIcons icon="logout" size={30}/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={() => modalize.current.close()}>
            <MaterialIcons icon="close" size={30}/>
        </Button>
    </>
}

export default ModalizeLogout