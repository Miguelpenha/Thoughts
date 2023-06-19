import { IThought } from '../../types'
import { Share } from 'react-native'

function useHandleShare(thought: IThought) {
    async function handleShare() {
        await Share.share({
            title: thought.name,
            message: thought.text
        })
    }

    return handleShare
}

export default useHandleShare