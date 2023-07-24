import { IThought } from '../../../../../types'

function useText(groups: string[], thoughts: IThought[]) {
    if (!groups.length || !thoughts.length) {
        if (!groups.length && !thoughts.length) {
            return 'grupos e pensamentos'
        } else if (groups.length && !thoughts.length) {
            return 'pensamentos'
        } else {
            return 'grupos'
        }
    }
}

export default useText