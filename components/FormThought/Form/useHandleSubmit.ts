function useHandleSubmit(name: string, text: string, secure: boolean, onSubmit: (name: string, text: string, secure: boolean) => Promise<void>) {
    async function handleSubmit() {
        await onSubmit(name, text, secure)
    }

    return handleSubmit
}

export default useHandleSubmit