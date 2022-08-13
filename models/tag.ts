import mongoose from 'mongoose'
import { ITag } from  '../types'
import created from './schemasPatterns/created'

const schema = new mongoose.Schema<ITag>({
    name: String,
    count: {
        type: Number,
        default: 0
    },
    created
})

const tagsModel = mongoose.models.tag || mongoose.model<ITag>('tag', schema)

export default tagsModel