import { FC, Dispatch, SetStateAction } from 'react'
import { IThought } from '../../types'
import { Modal, ContainerAuthor, Author, Text, Tags, ContainerTag, Tag } from './style'
import IconAuthor from './IconAuthor'
import Link from 'next/link'

interface Iprops {
    openModal: boolean
    thought: IThought | undefined
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalThought: FC<Iprops> = ({ thought, openModal, setOpenModal }) => {
    if (thought) {
        return (
            <Modal
                isOpen={openModal}
                onRequestClose={() => setOpenModal(false)}
                style={{
                    overlay: { display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                }}
            >
                <Link href={`authors/${thought.author}`} passHref>
                    <ContainerAuthor>
                        <IconAuthor/>
                        <Author>{thought.author}</Author>
                    </ContainerAuthor>
                </Link>
                <Text>{thought.text}</Text>
                <Tags>
                    {thought.tags && thought.tags.map((tag, index) => (
                        <Link key={index} href={`tags/${tag}`} passHref>
                            <ContainerTag>
                                <Tag>#{tag}</Tag>
                            </ContainerTag>
                        </Link>
                    ))}
                </Tags>
            </Modal>
        )
    } else {
        return null
    }
}

export default ModalThought