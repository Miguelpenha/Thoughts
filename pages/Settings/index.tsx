import useModalize from '../../components/hooks/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Container, ButtonCancel, Button } from './style'
import Icon from '../../components/Icon'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/modalizes/ModalizeLogout'
import ModalizeExportThoughts from '../../components/modalizes/ModalizeExportThoughts'
import ModalizeDeleteData from '../../components/modalizes/ModalizeDeleteData'

function Settings() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()
  const { modalize: modalizeExportThoughts, props: propsModalizeExportThoughts } = useModalize()
  const { modalize: modalizeDeleteData, props: propsModalizeDeleteData } = useModalize()

  return <>
    <ContainerDefault>
      <HeaderBack>Configurações</HeaderBack>
      <Container>
        <ButtonCancel index={1} title="Logout" onPress={modalizeLogout.open}>
          <Icon color="color" name="logout" size={30}/>
        </ButtonCancel>
        <Button index={2} title="Exportar" onPress={modalizeExportThoughts.open}>
          <Icon name="file-upload" size={30}/>
        </Button>
        <ButtonCancel index={3} title="Deletar dados" onPress={modalizeDeleteData.open}>
          <Icon color="color" name="delete" size={30}/>
        </ButtonCancel>
      </Container>
      <Modalize {...propsModalizeLogout}>
        <ModalizeLogout modalize={modalizeLogout.ref}/>
      </Modalize>
      <Modalize {...propsModalizeExportThoughts}>
        <ModalizeExportThoughts modalize={modalizeExportThoughts.ref}/>
      </Modalize>
      <Modalize {...propsModalizeDeleteData}>
        <ModalizeDeleteData modalize={modalizeDeleteData.ref}/>
      </Modalize>
    </ContainerDefault>
  </>
}

export default Settings