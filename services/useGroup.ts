import useGroups from './useGroups'
import { useState, useEffect } from 'react'

function useGroup(groupName: string) {
    const groups = useGroups()
    const [group, setGroup] = useState<string>()

    useEffect(() => {
        groups.map(group => {
            if (group === groupName) {
                setGroup(group)
            }
        })
    }, [groups])

    return group
}

export default useGroup