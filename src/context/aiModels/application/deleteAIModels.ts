import { AIModelRepository } from "../entity/aiModel.repository"



export const deleteAIModelDB = async (repository: AIModelRepository,id:string)=>{
    await repository.deleteAIModelById(id)
}