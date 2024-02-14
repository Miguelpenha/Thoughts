import { ISettings } from '../../types'
import { Dispatch, SetStateAction } from 'react'

interface ISettingsContext {
    settings: ISettings
    setSettings: Dispatch<SetStateAction<ISettings>>
}

export default ISettingsContext