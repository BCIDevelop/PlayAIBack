import { AIModelRepository } from "../../entity/aiModel.repository";
import { Models } from "../../../../mongoose/models.schema";
import { AIModel } from "../../entity/aiModel";
export const aiModelRepository:AIModelRepository= {
    createAIModel:async (aiModelInput: AIModel) => {
        const aiModel = new Models(aiModelInput)
        const record = await aiModel.save()
        return record.toObject()
    },
    deleteAIModelById:async(id)=>{
        return await Models.findOneAndDelete({_id:id})
    },
    getAIModels:async(limit,offset)=>{
        return await Models.find({}).limit(limit).skip(offset)
    },
    countDocuments:async()=>{
        return await Models.countDocuments()
    },
    getAIModelById:async (id)=> {
        return await Models.findById(id)
    },
    getAIModelsByTagName:async(predicates,limit,offset)=>{
            return await Models.find({$and:predicates}).limit(limit).skip(offset)
    },
    updateAIModels:async(body,id)=>{
        return await Models.findOneAndUpdate({_id:id},body,{new:true})
    }
}