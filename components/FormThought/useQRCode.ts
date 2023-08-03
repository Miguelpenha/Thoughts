import { Dispatch, SetStateAction, useEffect } from 'react'

function useQRCode(QRCode: string | undefined, setText: Dispatch<SetStateAction<string>>) {
    useEffect(() => {
        if (QRCode) {
            setText(QRCode)
        }
    }, [QRCode])
}

export default useQRCode