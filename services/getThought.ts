import useThoughts from './useThoughts'
import { useState, useEffect } from 'react'
import { IThought } from '../types'

function getThought(id: string) {
    const thoughts = useThoughts()
    const [thought, setThought] = useState<IThought>()

    useEffect(() => {
        thoughts.map(thoughtMap => {
            if (thoughtMap.id === id) {
                setThought(thoughtMap)
            }
        })
    }, [thoughts])

    return thought
}

export default getThought