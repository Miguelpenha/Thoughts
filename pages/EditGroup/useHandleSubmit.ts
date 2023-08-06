import useGroups from '../../services/useGroups'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import editGroup from '../../services/editGroup'

function useHandleSubmit() {
    const groups = useGroups()
    const navigation = useNavigation()

    async function handleSubmit(name: string, group: string) {
        if (name) {
            let isExists = false

            groups.map(group => {
                if (group === name) {
                    isExists = true
                }
            })

            if (!isExists) {
                await editGroup(group, name)

                Toast.show({
                    type: 'success',
                    text1: 'Grupo editado com sucesso!'
                })

                navigation.goBack()
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Esse grupo já existe'
                })
            }
        } else {
            Toast.show({
                type: 'error',
                text1: 'Nome não informado'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit