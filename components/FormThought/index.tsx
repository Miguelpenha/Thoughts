import { FC } from 'react'
import { IProps } from './type'
import useModalize from '../hooks/useModalize'
import { ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ButtonIcon from '../buttons/ButtonIcon'
import IconMenu from '../IconMenu'
import { RFPercentage } from 'react-native-responsive-fontsize'
import SelectedGroup from './SelectedGroup'
import Form from './Form'
import { Modalize } from 'react-native-modalize'
import ModalizeSelectedGroup from '../modalizes/ModalizeSelectedGroup'

const FormThought: FC<IProps> = ({ modalizeMenuIcons, icon, group, QRCode, thought, onSubmit, initialData, titleSubmit, setGroup }) => {
    const { modalize: modalizeSelectedGroup, props: propsModalizeSelectedGroup } = useModalize(70)

    if (!initialData) {
        return (
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView  behavior="padding" enabled>
                        <ButtonIcon onPress={modalizeMenuIcons.current?.open}>
                            <IconMenu size={RFPercentage(5)} name={icon}/>
                        </ButtonIcon>
                        <SelectedGroup group={group} modalize={modalizeSelectedGroup.ref}/>
                        <Form
                            QRCode={QRCode}
                            thought={thought}
                            onSubmit={onSubmit}
                            titleSubmit={titleSubmit}
                        />
                        <Modalize ref={modalizeSelectedGroup.ref} {...propsModalizeSelectedGroup}>
                            <ModalizeSelectedGroup setGroup={setGroup} modalize={modalizeSelectedGroup.ref}/>
                        </Modalize>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    } else {
        return null
    }
}

export default FormThought