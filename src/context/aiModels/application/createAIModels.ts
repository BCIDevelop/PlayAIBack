import { AIModel } from "../entity/aiModel"
import { AIModelRepository } from "../entity/aiModel.repository"


export const createAIModelDB = async (repository:AIModelRepository,aiModel:AIModel)=>{
    return await repository.createAIModel(aiModel)

}