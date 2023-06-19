import useModalize from '../../components/modalizes/useModalize'
import useAdmin from '../../components/useAdmin'
import useTeacher from '../../components/useTeacher'
import useType from '../../components/useType'
import * as Clipboard from 'expo-clipboard'
import toast from 'react-native-toast-message'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Container, ContainerData, Label, Data, ButtonLogout } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Icon from '../../components/Icon'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/ModalizeLogout'
import Loading from '../../components/Loading'

function Settings() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()
  const admin = useAdmin()
  const teacher = useTeacher()
  const type = useType()
  
  async function handleCopy(value: string | false) {
    if (value) {
      await Clipboard.setStringAsync(value)

      toast.show({
        type: 'info',
        text1: 'Dado copiado'
      })
    }
  }

  return <>
    <ContainerDefault scroll>
      <HeaderBack>Configurações</HeaderBack>
      <Container>
        {(admin || teacher) ? <>
            <ContainerData onPress={async () => await handleCopy(admin || teacher)}>
              <Label entering={FadeInDown.duration(500).delay(100)}>Logado como </Label>
              <Data entering={FadeInDown.duration(500).delay(200)}>{admin || teacher}</Data>
            </ContainerData>
            <ButtonLogout index={1} title="Logout" onPress={modalizeLogout.open}>
              <Icon icon="logout"/>
            </ButtonLogout>
        </> : <Loading/>}
      </Container>
    </ContainerDefault>
    <Modalize {...propsModalizeLogout}>
      <ModalizeLogout type={type} modalize={modalizeLogout.ref}/>
    </Modalize>
  </>
}

export default Settings