import { createContext } from 'react'
import ISettingsContext from './type'

const SettingsContext = createContext<ISettingsContext>({} as ISettingsContext)

export default SettingsContext