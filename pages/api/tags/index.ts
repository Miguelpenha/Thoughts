import { NextApiRequest, NextApiResponse } from 'next'
import thoughtsModel from '../../../models/thought'
import connectDB from '../../../services/connectDB'
import { IThought } from '../../../types'

interface ITag {
    name: string
    count: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const thoughts: IThought[] = await thoughtsModel.find()
        const tags: ITag[] = []
        const tagsCompare: string[] = []
    
        thoughts.map(thought => {
            thought.tags && thought.tags.map(tag => {
                if (!tagsCompare.includes(String(tag.toUpperCase()))) {
                    tags.push({
                        name: String(tag),
                        count: 1
                    })

                    tagsCompare.push(tag.toUpperCase())
                } else {
                    tags.map(tagComplete => tagComplete.name === tag && tagComplete.count++)
                }
            })
        })

        res.json(tags)
    } else {
        res.status(404).end()
    }
}