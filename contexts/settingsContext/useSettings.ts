import { useContext } from 'react'
import SettingsContext from './Context'

function useSettings() {
    return useContext(SettingsContext)
}

export default useSettings