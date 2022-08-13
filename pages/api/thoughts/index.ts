import { NextApiRequest, NextApiResponse } from 'next'
import thoughtsModel from '../../../models/thought'
import tagsModel from '../../../models/tag'
import connectDB from '../../../services/connectDB'
import { ITag } from '../../../types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const thoughts = await thoughtsModel.find().populate('tag')
    
        res.json(thoughts)
    } else if (req.method === 'POST') {
        await connectDB()

        const { author, text, tags }: {
            author: string
            text: string
            tags: string[]
        } = req.body

        if (author && text) {
            const tagsCorrects: string[] = []

            if (tags) {
                tags.map(tag => 
                    tagsCorrects.push(tag.replace(/\s/g, '-'))
                )
            }

            const tagsUse = await Promise.all(
                tagsCorrects.map(async tag => {
                    const tagIsExits = await tagsModel.findOne({ name: tag } as ITag)
                    
                    if (tagIsExits) {
                        return tagIsExits._id
                    } else {
                        const tagCreated = await tagsModel.create({
                            name: tag
                        })
    
                        return tagCreated._id
                    }
                })
            )
            
            await thoughtsModel.create({
                author,
                text,
                tags: tagsUse
            })

            res.json({ created: true })
        } else {
            res.json({ error: 'Missing author or text' })
        }
    } else {
        res.status(404).end()
    }
}