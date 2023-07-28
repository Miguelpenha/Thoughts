import useDeleteGroup from '../../services/useDeleteGroup'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'

function useHandleDeleteGroup(groupName: string) {
    const deleteGroup = useDeleteGroup(groupName)

    async function handleDeleteGroup() {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticar'
        })

        if (success) {
            await deleteGroup()

            Toast.show({
                type: 'error',
                text1: 'Grupo excluído'
            })

            return true
        } else {
            Toast.show({
                type: 'error',
                text1: 'Autenticação falhou'
            })

            return false
        }
    }

    return handleDeleteGroup
}

export default useHandleDeleteGroup