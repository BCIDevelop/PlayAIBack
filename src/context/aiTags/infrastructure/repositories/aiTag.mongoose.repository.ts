import { Tags } from "../../../../mongoose/tags.schema";
import { AITag } from "../../entity/aiTag";
import { AITagRepository } from "../../entity/aitTag.repository";

export const aiTagRepository: AITagRepository = {
    createAITag:async (aitTag: AITag) => {
        const aiTag = new Tags(aitTag)
        const record = await aiTag.save()
        return record.toObject()
    },
    deleteAITagById:async(id)=>{
        return await Tags.findOneAndDelete({_id:id})
    },
    getAITags:async(limit,offset)=>{
        return await Tags.find({}).limit(limit).skip(offset)
    },
    countDocuments:async()=>{
        return await Tags.countDocuments()
    },
    getAITagByName:async (name)=>{
        return await Tags.findOne({name})
    },

}
