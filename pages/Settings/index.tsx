import useModalize from '../../components/modalizes/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { ButtonLogout } from './style'
import Icon from '../../components/Icon'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'

function Settings() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()

  return <>
    <ContainerDefault>
      <HeaderBack>Configurações</HeaderBack>
      <ButtonLogout index={1} title="Logout" onPress={modalizeLogout.open}>
        <Icon name="logout" size={30}/>
      </ButtonLogout>
      <Modalize {...propsModalizeLogout}>
        <ModalizeLogout modalize={modalizeLogout.ref}/>
      </Modalize>
    </ContainerDefault>
  </>
}

export default Settings