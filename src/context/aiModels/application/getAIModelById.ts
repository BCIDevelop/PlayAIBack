import { AIModelRepository } from "../entity/aiModel.repository"

export const getAIModelById = async (repository:AIModelRepository,id:string)=>{
    return await repository.getAIModelById(id)
}