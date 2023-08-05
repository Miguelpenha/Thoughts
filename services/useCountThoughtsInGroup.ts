import useThoughts from './useThoughts'
import { useState, useEffect } from 'react'

function useCountThoughtsInGroup(group: string) {
    const thoughts = useThoughts()
    const [count, setCount] = useState<number | null>(null)
    const [finish, setFinish] = useState(false)

    useEffect(() => {
        if (!finish) {
            thoughts.map((thought, index) => {
                if (thought.group === group) {
                    setCount(count => count+1)
                }

                if (index === thoughts.length-1) {
                    setFinish(true)
                }
            })
        }
    }, [thoughts, finish])
    
    return count
}

export default useCountThoughtsInGroup