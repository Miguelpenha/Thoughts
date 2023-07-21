import { FC } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerDefault from '../../components/ContainerDefault'

interface Iprops {
  children: any
}

const Container: FC<Iprops> = ({ children }) => {
  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerDefault scroll>
            {children}
          </ContainerDefault>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Container