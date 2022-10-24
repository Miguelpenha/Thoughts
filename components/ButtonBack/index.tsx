import { useRouter } from 'next/router'
import { Icon } from './style'

function ButtonBack() {
    const router = useRouter()

    return (
        <Icon xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" onClick={() => router.back()}>
            <rect fill="none" height="24" width="24"/>
            <g>
                <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
            </g>
        </Icon>
    )
}

export default ButtonBack