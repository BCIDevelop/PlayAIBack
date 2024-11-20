import { AIModel } from "../entity/aiModel";
import { AIModelRepository } from "../entity/aiModel.repository";

export const updateAIModelDB = async (repository:AIModelRepository, id:string, body: Partial<AIModel>)=>{
    return await repository.updateAIModels(body,id)
}