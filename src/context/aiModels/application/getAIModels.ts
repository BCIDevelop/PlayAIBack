import { AIModelRepository } from "../entity/aiModel.repository"


export const getAIModelsDB=async (repository:AIModelRepository,offset:number,limit:number)=>{
    const records = await repository.getAIModels(limit,offset)
    const count = await repository.countDocuments()
    return {count,records}
}