import { useNavigation, useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import useModalize from '../../components/hooks/useModalize'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import HeaderBack from '../../components/HeaderBack'
import { Modalize } from 'react-native-modalize'
import getThought from '../../services/getThought'
import FormThought from '../../components/FormThought'
import useHandleSubmit from './useHandleSubmit'
import ContainerDefault from '../../components/ContainerDefault'
import { ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'

interface IParams {
    QRCode?: string
    thoughtID?: string
    groupName?: string
}

function CreateThought() {
    const navigation = useNavigation()
    const [height, setHeight] = useState(90)
    const { modalize: modalizeMenuIconsRef, props: propsModalizeMenuIcons } = useModalize(height, 55)
    const params = useRoute().params as IParams
    const thought = getThought(params.thoughtID)
    const [icon, setIcon] = useState('book')
    const [initialData, setInitialData] = useState(true)
    const modalizeMenuIconsProps = modalizeMenuIcons(setHeight, modalizeMenuIconsRef.ref, setIcon)
    const [group, setGroup] = useState('')
    const handleSubmit = useHandleSubmit(icon, group)

    useEffect(() => {
        if (thought && initialData) {
            setIcon(thought.icon)
            setGroup(thought.group)
            setInitialData(false)
        }

        if (!params || !params.thoughtID) {
            setInitialData(false)
        }
    }, [thought, initialData])

    useEffect(() => {
        if (params) {
            if (params.groupName) {
                setGroup(params.groupName)
            }
        }
    }, [params])
    
    return (
        <ContainerDefault>
            <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                page: 'CreateThought'
            })}>
                {`Criar pensamento ${group ? `(${group})` : ''}`}
            </HeaderBack>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView keyboardVerticalOffset={-50} behavior="position" enabled>
                        <FormThought
                            icon={icon}
                            group={group}
                            thought={thought}
                            setGroup={setGroup}
                            QRCode={params.QRCode}
                            onSubmit={handleSubmit}
                            titleSubmit="Confirmar"
                            initialData={initialData}
                            modalizeMenuIcons={modalizeMenuIconsRef.ref}
                        />
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </ScrollView>
            <Modalize onClosed={() => setHeight(90)} {...propsModalizeMenuIcons} {...modalizeMenuIconsProps}/>
        </ContainerDefault>
    )
}

export default CreateThought