import { NextApiRequest, NextApiResponse } from 'next'
import thoughtsModel from '../../../models/thought'
import connectDB from '../../../services/connectDB'
import { IThought, ITag } from '../../../types'

interface IQuery {
    tag: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const { tag: tagName } = req.query as unknown as IQuery
        const thoughts: IThought[] = await thoughtsModel.find()
        const thoughtsSelect: IThought[] = []
        let tag: ITag | null = null
    
        thoughts.map(thought => {
            thought.tags && thought.tags.map(tagOrigin => {
                if (tagOrigin.toUpperCase() === tagName.toUpperCase()) {
                    if (!tag) {
                        tag = {
                            name: String(tagOrigin),
                            count: 1
                        }
                    } else {
                        tag.count++
                    }

                    thoughtsSelect.push(thought)
                }
            })
        })

        res.json(tag ? { tag, thoughts: thoughtsSelect } : { notFound: true })
    } else {
        res.status(404).end()
    }
}