import useModalize from '../../components/hooks/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { ButtonLogout } from './style'
import Icon from '../../components/Icon'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'
import ModalizeExportThoughts from '../../components/modalizes/ModalizeExportThoughts'

function Settings() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()
  const { modalize: modalizeExportThoughts, props: propsModalizeExportThoughts } = useModalize()

  return <>
    <ContainerDefault>
      <HeaderBack>Configurações</HeaderBack>
      <ButtonLogout index={1} title="Logout" onPress={modalizeLogout.open}>
        <Icon name="logout" size={30}/>
      </ButtonLogout>
      <ButtonLogout index={2} title="Exportar" onPress={modalizeExportThoughts.open}>
        <Icon name="file-upload" size={30}/>
      </ButtonLogout>
      <Modalize {...propsModalizeLogout}>
        <ModalizeLogout modalize={modalizeLogout.ref}/>
      </Modalize>
      <Modalize {...propsModalizeExportThoughts}>
        <ModalizeExportThoughts modalize={modalizeExportThoughts.ref}/>
      </Modalize>
    </ContainerDefault>
  </>
}

export default Settings