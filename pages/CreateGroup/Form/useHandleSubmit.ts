import useGroups from '../../../services/useGroups'
import { useNavigation } from '@react-navigation/native'
import createGroup from '../../../services/createGroup'
import Toast from 'react-native-toast-message'

function useHandleSubmit(name: string) {
    const groups = useGroups()
    const navigation = useNavigation()

    async function handleSubmit() {
        if (name) {
            let isExists = false

            groups.map(group => {
                if (group === name) {
                    isExists = true
                }
            })

            if (!isExists) {
                await createGroup(name)

                Toast.show({
                    type: 'success',
                    text1: 'Grupo criado com sucesso!'
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