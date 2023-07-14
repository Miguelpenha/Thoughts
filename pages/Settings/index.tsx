import useNavigateVerified from '../../components/hooks/useNavigateVerified'
import useModalize from '../../components/hooks/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Container, ButtonCancel, Button } from './style'
import Icon from '../../components/Icon'
import { Modalize } from 'react-native-modalize'
import ModalizeExportThoughts from '../../components/modalizes/ModalizeExportThoughts'
import ModalizeDeleteData from '../../components/modalizes/ModalizeDeleteData'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'

function Settings() {
  const navigateVerified = useNavigateVerified()
  const { modalize: modalizeExportThoughts, props: propsModalizeExportThoughts } = useModalize()
  const { modalize: modalizeDeleteData, props: propsModalizeDeleteData } = useModalize()
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()

  return <>
    <ContainerDefault>
      <HeaderBack>Configurações</HeaderBack>
      <Container>
        <Button index={1} title="Exportar" onPress={modalizeExportThoughts.open}>
          <Icon name="file-upload" size={30}/>
        </Button>
        <Button index={2} title="Importar" onPress={async () => {
          await navigateVerified('ImportThoughts')
        }}>
          <Icon name="file-download" size={30}/>
        </Button>
        <ButtonCancel index={3} title="Deletar dados" onPress={modalizeDeleteData.open}>
          <Icon color="color" name="delete" size={30}/>
        </ButtonCancel>
        <ButtonCancel index={4} title="Logout" onPress={modalizeLogout.open}>
          <Icon color="color" name="logout" size={30}/>
        </ButtonCancel>
      </Container>
      <Modalize {...propsModalizeExportThoughts}>
        <ModalizeExportThoughts modalize={modalizeExportThoughts.ref}/>
      </Modalize>
      <Modalize {...propsModalizeDeleteData}>
        <ModalizeDeleteData modalize={modalizeDeleteData.ref}/>
      </Modalize>
      <Modalize {...propsModalizeLogout}>
        <ModalizeLogout modalize={modalizeLogout.ref}/>
      </Modalize>
    </ContainerDefault>
  </>
}

export default Settings